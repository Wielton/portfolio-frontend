<template>
        <div class="outer" >
            <div class="inner1">
                
            </div>
        </div>
</template>

<script>
export default {
    name: 'HeroComp',
    data: () => {
        

        return {}
    }
}
</script>
<style lang="scss" scoped>
    .outer {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(30deg, rgb(97, 53, 179), black);
        z-index: -1;
        
    }
    .inner1 {
        background-image: linear-gradient(65deg, rgb(48, 17, 115), black);
        width: 10em;
        height: 10em;
        border-radius: 50%;
    }
    
    
    
    
</style>

