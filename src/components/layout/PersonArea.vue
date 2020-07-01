<template>
    <div class="person-area">
        <ul class="list-unstyled d-flex align-items-center m-0 p-0">
            <li class="dropdown notific">
                <span class="dropdown-toggle" id="notific" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bell"></i>
                    <span class="notific-num"></span>
                </span>
                <div class="dropdown-menu" aria-labelledby="notific">
                    <span class="dropdown-item">first notific</span>
                    <span class="dropdown-item">sec notific</span>
                    <span class="dropdown-item">third notific</span>
                </div>
            </li>
            <li class="dropdown person-profile">
                <span class="dropdown-toggle" id="person-profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="@/assets/person.jpg" alt="person img">
                    <span class="name">m.hussien</span>
                </span>
                <div class="dropdown-menu" aria-labelledby="person-profile">
                    <span class="dropdown-item">first</span>
                    <span class="dropdown-item">sec</span>
                    <span class="dropdown-item">third</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PersonArea"
}
</script>