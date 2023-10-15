<?php

namespace App\Controller\Admin;

use App\Entity\Artwork;
use App\Entity\Categorie;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{

    public function __construct(private AdminUrlGenerator $adminUrlGenerator){}
    
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {

      $url = $this->adminUrlGenerator
            ->setController(ArtworkCrudController::class)
            ->generateUrl();
        // return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        // $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        // return $this->redirect($adminUrlGenerator->setController(OneOfYourCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Bureau');
    }

    public function configureMenuItems(): iterable
    {
        return [

        MenuItem::section('Oeuvres'),
        MenuItem::linkToCrud('Artwork', 'fa fa-tags', Artwork::class)
            ->setAction('new'),

        MenuItem::subMenu('Action', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Créer une nouvelle série', 'fas fa-plus', Categorie::class)
            ->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Afficher les séries existantes', 'fas fa-eye', Categorie::class)
        ]),


        ] ;

        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
