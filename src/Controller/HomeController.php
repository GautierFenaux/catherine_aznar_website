<?php

namespace App\Controller;

use App\Repository\ArtworkRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]

    
    public function index(ArtworkRepository $artworkRepository): Response
    {
        $artworks = $artworkRepository->findAll();

        return $this->render('home/index.html.twig', [
            'artworks' => $artworks,
        ]);
    }
}
