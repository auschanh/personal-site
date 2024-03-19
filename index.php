<!doctype html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
    <!-- Primary Meta Tags -->
    <meta name="title" content="Austin Chanhsavang - auschanh.com" />
    <meta name="description"
        content="Enter into the digital world of Austin Chanhsavang's personal site, where my software and web development journeys unfolds. Discover what captivates my interest, and learn of my adventures in the world." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="auschanh.com" />
    <meta property="og:title" content="Austin Chanhsavang - auschanh.com" />
    <meta property="og:description"
        content="Enter into the digital world of Austin Chanhsavang's personal site, where my software and web development journeys unfolds. Discover what captivates my interest, and learn of my adventures in the world." />
    <meta property="og:image" content="https://auschanh.com/assets/metaimage.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="auschanh.com" />
    <meta property="twitter:title" content="Austin Chanhsavang - auschanh.com" />
    <meta property="twitter:description"
        content="Enter into the digital world of Austin Chanhsavang's personal site, where my software and web development journeys unfolds. Discover what captivates my interest, and learn of my adventures in the world." />
    <meta property="twitter:image" content="https://auschanh.com/assets/metaimage.jpg" />
    <title>Austin Chanhsavang</title>
    <link rel="icon" type="images/x-icon" href="assets/logos/ac-logo-white.png" />
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<body>
    <div id="darkMode" class="dark">
        <!-- Navbar  -->
        <?php include './sections/navbar.html';?>

        <!-- Intro and About section-->
        <?php include './sections/about.html';?>

        <!-- Work section -->
        <?php include './sections/work.html'?>

        <!-- Education -->
        <?php include './sections/education.html'?>

        <!-- Projects -->
        <?php include './sections/projects.html'?>

        <!-- Contact -->
        <?php include './sections/contact.html'?>

        <!-- Footer -->
        <?php include './sections/footer.html'?>

        <!-- Modals for Projects -->
        <?php include './sections/modalProjects.html'?>

        <!-- Modals for Photos -->
        <?php include './sections/modalPhotos.html'?>


    </div>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>
    AOS.init();
    </script>
</body>
<script src="index.js"></script>
<script src="photography.js"></script>
<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
<script src="https://web3forms.com/client/script.js" async defer></script>
<script type="text/javascript" src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>

</html>