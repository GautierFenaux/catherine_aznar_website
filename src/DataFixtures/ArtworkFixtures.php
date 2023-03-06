<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\User;
use DateTimeImmutable;
use App\Entity\Artwork;
use Symfony\Component\Finder\Finder;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ArtworkFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager): void
    {
        $finder = new Finder;
   
        $finder->in('public/images/');
        
        
        foreach($finder as $fileFounded) {

            $artwork = new Artwork();
            $artwork = $artwork->setName($fileFounded->getFilename());
            $artwork = $artwork->setSlug('oeuvre');
            $artwork = $artwork->setUser(new User);
            $artwork->setUser($this->getReference(UserFixtures::USER));
            $artwork = $artwork->setCreatedAt(new DateTimeImmutable());
            $artwork = $artwork->setRealisationDate(new DateTime("2015-01-16"));
            $artwork = $artwork->setFile($fileFounded->getFilename());
            $manager->persist($artwork);
        }

        $manager->flush();
    
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }

}
