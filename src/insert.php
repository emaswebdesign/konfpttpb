<?php
class Registration {
    protected $mysqlConn;
    
    protected $data;
    protected $sql_servername = "localhost";
    protected $sql_database = "pttpb_konf";
    protected $sql_username = "pttpb_konf";
    protected $sql_password = "konf1290";
    protected $sql_table = "rejestracja";
    protected $email_from = "konferencja@pttpb.pl";
    protected $email_subject = "Konferencja PTTPB - Potwierdzenie zgłoszenia";
    protected $email_template = "./email_template.html";
    public function __construct()
    {
        $this->connectToMysql();
    }
    protected function connectToMysql() {
        $this->mysqlConn = new mysqli($this->sql_servername, $this->sql_username, $this->sql_password, $this->sql_database);
        $this->mysqlConn -> query("SET NAMES 'utf8'");
        if ($this->mysqlConn->connect_error) {
            throw new Exception("Connection failed: " . $this->mysqlConn->connect_error);
        }
    }
    /**
     * Saves the data from the form
     * @throws Exception
     */
    public function processForm() {
        try {
            $this->fetchPostData();
            $this->validateData();
            $this->saveRegistration();
            $this->sendConfirmationEmail();
        }
        catch(Exception $e) {
            $this->logError($e);
            throw $e;
        }
    }
    /**
     * Get submitted data
     */
    protected function fetchPostData() {
        $post = file_get_contents('php://input');
        $this->data = json_decode($post, true);
    }

    protected function validateData(){
        if(empty($this->data['email']))
            throw new Exception('Prosimy o podanie adresu email');

            
        if(empty($this->data['name']))
            throw new Exception('Prosimy o podanie imienia');

        
        if(empty($this->data['surname']))
            throw new Exception('Prosimy o podanie nazwiska');
    }


    /**
     * Insert into database
     * @throws Exception
     */
    protected function saveRegistration() {
        $result = $this->mysqlConn->query(sprintf(
            "INSERT INTO `%s` (`time`,`email`, `name`, `surname`, `academicTitle`, `institution`, `doctorLicenseNumber`, `preconference`, `fv`, `companyName`, `companyAddress`, `companyNrDomu`, `companyNrLokalu`, `companyCity`, `companyZip`, `companyPoczta`, `companyNip`, `totalPrice`, `contributionPayed`, `Source`) 
             VALUES ( '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s');",
            $this->sql_table,
            date('Y-m-d H:i:s'),
            $this->data['email'],
            $this->data['name'],
            $this->data['surname'],
            $this->data['academicTitle'],
            $this->data['institution'],
            $this->data['doctorLicenseNumber'],
            $this->data['preconference'],
            $this->data['fv'],
            $this->data['companyName'],
            $this->data['companyAddress'],
            $this->data['companyNrDomu'],
            $this->data['companyNrLokalu'],
            $this->data['companyCity'],
            $this->data['companyZip'],
            $this->data['companyPoczta'],
            $this->data['companyNip'],
            $this->data['totalPrice'],
            $this->data['contributionPayed'],
            $_SERVER['REMOTE_ADDR']
        ));
        if(!$result) {
            throw new Exception('Nie udało się zapisać na konferencję. Prosimy o kontakt z administratorem');
        }
    }
    /**
     * Sends email
     * @param $email
     */
    public function sendConfirmationEmail() {
        $to = $this->data['email'];
        $subject = $this->email_subject;
        $headers = "From: " . strip_tags($this->email_from) . "\r\n";
        $headers .= "Reply-To: ". strip_tags($this->email_from) . "\r\n";
        $headers .= "CC: konferencja@pttpb.pl\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8";
        $message = file_get_contents($this->email_template);

        $placeholders = array();
        $values = array();
        foreach($this->data as $key => $value) {
            $placeholders[] = "{{".$key."}}";
            $values[] = $value;
        }

        $message = str_replace(
            $placeholders,
            $values,
            $message);

        mail($to, $subject, $message, $headers);
    }

        /**
     * Insert into database
     * @throws Exception
     */
    protected function logError($e) {

        $data = array(
            'exception' => $e->getMessage(),
            'post' => $this->data,
            'server' => $_SERVER,
        );

        $result = $this->mysqlConn->query(sprintf(
            "INSERT INTO `%s` (`time`,`data`) 
             VALUES ( '%s', '%s');",
            'logs',
            date('Y-m-d H:i:s'),
            json_encode($data)
        ));
    }
}
/**
 * This starts the script
 */
function run() {
    header('Content-Type: application/json');
    try {
        $reg = new Registration();
        $success = $reg->processForm();
        echo json_encode(['error' => 0, 'success' => $success]);
    }
    catch(Exception $e) {
        echo json_encode(['error' => "Wystąpił nieoczekiwany błąd: ".$e->getMessage()]);
    }
    exit;
}
//START!
run();