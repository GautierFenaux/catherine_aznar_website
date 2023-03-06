<?php

namespace App\DataFixtures;

use App\Entity\Artwork;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Finder\Finder;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{

    public function load(ObjectManager $manager): void
    {
        // $finder = new Finder;
   
        // $finder->in([__DIR__, 'public/assets/images/']);
      
        // $finder->files()->name('*.jpg');
        // foreach($finder as $fileFounded) {
        //     $artwork = new Artwork();
        //     $artwork = $artwork->setName($fileFounded);
        //     $artwork = $artwork->setSlug('oeuvre');
        //     $artwork = $artwork->setUser(new User);
        //     $artwork = $artwork->setCreatedAt(new DateTimeImmutable());
        //     $artwork = $artwork->setRealisationDate(new DateTimeImmutable());
        //     $artwork = $artwork->setFile($fileFounded);
        //     $manager->persist($artwork);
        // }

        // $manager->flush();
    }
}
