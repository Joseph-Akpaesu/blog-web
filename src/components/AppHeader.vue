<template>
    <div class="nav-bar">
        <ul>
            <li class="logo">
                <a href="#">Afric foods</a>
            </li>
            <li class="nav-link">
                <a href="#">Home</a>
            </li>
            <li class="nav-link">
                <a href="#">News</a>
            </li>
            <li class="nav-link">
                <a href="#">Food</a>
            </li>
            <li class="nav-link">
                <a href="#">About Us</a>
            </li>
        </ul>
</div>

</template>

<script scoped>
export default {
    
}
</script>


<style scoped>
.nav-bar {
    background-color: white;
    width: 100%; 
    top: 0%;  
}

.nav-bar ul {
    display: flex; 
    border-bottom: 1px solid  rgb(230, 226, 226);

}

.nav-bar .nav-link {
    list-style: none;
    margin-left: 35px;
    margin-top: 15px;
    margin-bottom: 23px;
}

.nav-bar a {
    text-decoration: none;
    color: rgb(110, 110, 110);
    cursor: pointer;
}

.logo {
font-family: 'Pacifico', cursive;
font-size: 25px;
font-weight: 20px;
list-style: none;
margin-top: 0%;

}

</style>