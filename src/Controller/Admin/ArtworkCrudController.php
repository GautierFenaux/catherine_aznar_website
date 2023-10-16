<?php

namespace App\Controller\Admin;

use DateTime;
use App\Entity\Artwork;
use App\Form\ArtworkImageType;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
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
            ImageField::new('file', 'Images')
                ->setBasePath('images')
                ->setUploadDir('public/images'),
            CollectionField::new('artworkImages', 'Images d\'illustration')
                ->setEntryType(ArtworkImageType::class),
            DateTimeField::new('realisation_date', 'Date de réalisation'),
            DateTimeField::new('created_at', )->hideOnForm(),
            AssociationField::new('categorie', 'Série'),
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {

        if(!$entityInstance instanceof Artwork) return ;
        $entityInstance->setCreatedAt(new \DateTimeImmutable());
        parent::persistEntity($entityManager, $entityInstance);
    }
    
}
