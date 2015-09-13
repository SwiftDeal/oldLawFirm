<?php

/**
 * The Default Example Controller Class
 *
 * @author Meraj Ahmad Siddiqui <meraj@cloudstuffs.com>
 */
use Framework\Controller as Controller;
use Framework\RequestMethods as RequestMethods;

class Admin extends Controller {

    public function index() {
    	$this->changeLayout("login");
    	$view = $this->getActionView();
    	    	if(RequestMethods::post("login")=="true"){
    		$usr = RequestMethods::post("username");
    		$pass = RequestMethods::post("password");
    		if($usr=="root" && $pass=="root"){
    			self::redirect("/admin/dashboard");

    		}
    	}

    }
    public function dashboard() {
    	$this->changeLayout("dashboard");
    	$view = $this->getActionView();

    }
    public function profile() {
    	$this->changeLayout("dashboard");
    	$view = $this->getActionView();

    }
    public function changeLayout($page) {
		$this->defaultLayout = "layouts/".$page;
		$this->setLayout();
	}
}
