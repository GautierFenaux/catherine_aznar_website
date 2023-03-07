<?php

namespace App\Controller;

use App\Repository\ArtworkRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArtWorkController extends AbstractController
{
    #[Route('/artwork/{id}', name: 'artwork')]
    public function index(int $id, ArtworkRepository $artworkRepository): Response
    {
        $artwork = $artworkRepository->find($id);

        return $this->render('art_work/index.html.twig', [
            'artwork' => $artwork,
        ]);
    }
}
