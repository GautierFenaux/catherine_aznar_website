<?php

namespace App\Controller\Admin;

use App\Entity\ArtworkImage;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ArtworkImageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ArtworkImage::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
