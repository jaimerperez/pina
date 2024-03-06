<?php

namespace ContainerWulojqO;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getSubtagsService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\Models\Tags\Subtags' shared autowired service.
     *
     * @return \App\Controller\Models\Tags\Subtags
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/Models/Tags/Subtags.php';

        $container->services['App\\Controller\\Models\\Tags\\Subtags'] = $instance = new \App\Controller\Models\Tags\Subtags();

        $instance->setContainer(($container->privates['.service_locator.5nX7ca3'] ?? $container->load('get_ServiceLocator_5nX7ca3Service'))->withContext('App\\Controller\\Models\\Tags\\Subtags', $container));

        return $instance;
    }
}