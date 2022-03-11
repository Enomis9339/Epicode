<?php 
 require 'connect.php'; 
 $pdo = connect();  
 $queryRes = $pdo->query('SELECT * FROM roles;');  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Crea User</title>
</head>
<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Database</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="create_user_form.php">Crea User</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="get_users.php">Lista User</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="create_post_form.php">Crea Post</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="get_posts.php">Lista post</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</header>
<div class="my-5">
    <form action="save_user.php" method="POST" class="container py-5 bg-light border rounded-2">
        <div>
            <label for="" class="form-label">Nome Utente</label>
            <input type="text" name="user" class="form-control">
        </div>
        <div>
            <label for="" class="form-label">Email</label>
            <input type="email" name="email" class="form-control">
        </div>
        <div>
            <label for="" class="form-label">Password</label>
            <input type="password" name="password" class="form-control">
        </div>
        <div>
            <label for="" class="form-label">Ruolo</label>
            <select name='id' class="form-select">
            <?php
                foreach($queryRes as $role) {
                    echo "
                        <option value='{$role['id']}'>{$role["name"]}</option>                      
                    ";
                }
            ?>
            </select>
        </div>
        <div class="py-3">
            <button class="btn btn-primary">Create</button>
        </div>
    </form>
</div>
    
</body>
</html>