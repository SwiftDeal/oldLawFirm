<?php

/**
 * The Default Example Controller Class
 *
 * @author Faizan Ayubi
 */
use Framework\Controller as Controller;

class Home extends Controller {

    public function index() {
    	$view = $this->getActionView();
        $view->set("page", "home");
    }
    public function contact() {
    	$view = $this->getActionView();
        $view->set("page", "contact");
    }

}
