<?php

namespace App\Controller\Admin;

use DateTime;
use App\Entity\Artwork;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ArtworkCrudController extends AbstractCrudController
{
    
    public static function getEntityFqcn(): string
    {
        return Artwork::class;
    }

    public function configureFields(string $pageName): iterable
    {

        // taille des images ne doit pas exceder
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name', 'Nom de l\'oeuvre'),
            TextareaField::new('description')->stripTags(),
            ImageField::new('file')
                ->setBasePath('images')
                ->setUploadDir('public/images'),
            DateTimeField::new('realisation_date'),
            DateTimeField::new('created_at')->hideOnForm(),
            AssociationField::new('categorie'),
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {

        if(!$entityInstance instanceof Artwork) return ;
        $entityInstance->setCreatedAt(new \DateTimeImmutable());
        parent::persistEntity($entityManager, $entityInstance);
    }
    
}
