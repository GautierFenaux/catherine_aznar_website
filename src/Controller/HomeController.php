<?php

namespace App\Controller;

use App\Repository\ArtworkRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class HomeController extends AbstractController
{
    #[Route('/', name: 'home', methods: ['GET'])]
    public function index(ArtworkRepository $artworkRepository, SerializerInterface $serializer): Response
    {
        // $artworks = $artworkRepository->findAll();
        $imagesInColumns = [] ;
        $maxInColumns = $artworkRepository->findByMaxPositionInColumns() ;

        // On récupère les images par ordre de position dans dans la colonne pour pouvoir les afficher correctement
        //On ne peut pas remplir la ligne d'une colonne vide tant que celle qui precède la colonne visée est vide 
        // (càd que pour pouvoir remplir la colonne 2 à la ligne 3 il faut que la colonne 1 à la ligne 3 soit remplie)
        for($i = 1 ; $i < $maxInColumns[0][1]+1 ; $i++) {
            $artworks = $artworkRepository->findBy(['positionInColumn' => $i], ['columnImage' => 'ASC']);
            // dump($artworks);
            array_push($imagesInColumns, $artworks);
        }

        // $i = 1 ;
        // while(count($artworks) != 0) {
        //     $i++ ;
        //     // var_dump(in_array("value", $artworks));
        //     if (in_array("value", $artworks)) {
        //         unset($artworks["a"]) ;
        //     }
        //     // dump($artworks);
        //     $artworks = $artworkRepository->findBy(['positionInColumn' => $i], ['columnImage' => 'ASC']);
        //     array_push($imagesInColumns, $artworks);
        // }  

        // dd($imagesInColumns);
        // Récupère les tableaux que l'on fusionne en un tableau et que l'on retourne en json. 
        $imagesInColumns = $serializer->serialize(array_merge(...$imagesInColumns), 'json');
        return $this->render('home/index.html.twig', [
            'artworks' =>  $imagesInColumns,
        ]);
    }

}
