<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo e(config('app.name', 'Laravel')); ?></title>
</head>
<body>
<div id="app">

    <main class="py-4">
        <?php echo $__env->yieldContent('content'); ?>
    </main>

</div>

<?php echo $__env->yieldContent('scripts'); ?>

</body>
</html>
<?php /**PATH C:\Users\Mouyd\Desktop\Graduation Project II\project ll\gp-app\resources\views/layouts/app1.blade.php ENDPATH**/ ?>