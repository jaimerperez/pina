<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerWulojqO\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerWulojqO/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerWulojqO.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerWulojqO\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerWulojqO\App_KernelDevDebugContainer([
    'container.build_hash' => 'WulojqO',
    'container.build_id' => 'fd57b4d1',
    'container.build_time' => 1623760891,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerWulojqO');
