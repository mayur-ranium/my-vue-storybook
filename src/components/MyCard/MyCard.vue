<template>
     <div class="py-2 px-4 border rounded shadow text-red">
        <header>
        <slot name="header"/>
        </header>
    </div>

    <div class="py-2 px-4 border rounded shadow text-red">
        <main>
        <slot/>
        </main>
    </div>

     <div class="py-2 px-4 border rounded shadow text-red">
        <footer>
        <slot name="footer"/>
        </footer>
    </div>
</template>