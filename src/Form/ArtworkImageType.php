<?php

namespace App\Form;

use App\Entity\ArtworkImage;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ArtworkImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('file', VichImageType::class, [
                'label' => 'Image',
            ])
            ->add('fileName', TextType::class, [
                'label' => 'Nom',
                'required'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {   
        $resolver
        ->setDefaults([ 'data_class' => ArtworkImage::class]);
    }
}
