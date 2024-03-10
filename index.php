<!doctype html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Austin Chanhsavang</title>
    <link rel="icon" type="images/x-icon" href="assets/logos/ac-logo-white.png" />
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- <script src="https://cdn.tailwindcss.com"></script> -->
</head>

<body>
    <div id="darkMode" class="dark">
        <!-- Navbar  -->
        <?php include 'navbar.html';?>

        <!-- Intro and About section-->
        <?php include 'about.html';?>

        <!-- Work section -->
        <?php include 'work.html'?>

        <!-- Education -->
        <?php include 'education.html'?>

        <!-- Projects -->
        <?php include 'projects.html'?>

        <!-- Contact -->
        <?php include 'contact.html'?>

        <!-- Footer -->
        <?php include 'footer.html'?>

        <!-- Modals for Projects -->
        <?php include 'modalProjects.html'?>

        <!-- Modals for Photos -->
        <?php include 'modalPhotos.html'?>


    </div>
</body>
<script src="index.js"></script>
<script src="phtography.js"></script>
<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
<script src="https://web3forms.com/client/script.js" async defer></script>
<script type="text/javascript" src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>

</html>