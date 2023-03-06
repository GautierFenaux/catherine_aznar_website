<?php

namespace App\DataFixtures;

use App\Entity\Artwork;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Finder\Finder;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{

    public const USER = "Gautier";

    public function load(ObjectManager $manager): void
    {
        $password = '123456';

        $user = new User();
        $user->setFirstname("Gautier");
        $user->setName("FENAUX");
        $user->setEmail("gautier.fenaux@gmail.com");
        $user->setRoles(['ROLE_USER', 'ROLE_ADMIN']);
        $user->setPassword($password);
        $manager->persist($user);
        $this->addReference(self::USER, $user);

        $manager->flush();
    }
}
