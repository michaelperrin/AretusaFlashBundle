<?php

namespace Aretusa\FlashBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('AretusaFlashBundle:Default:index.html.twig', array('name' => $name));
    }
}
