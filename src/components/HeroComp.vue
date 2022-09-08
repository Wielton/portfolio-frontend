<template>
    <v-container fluid>
                <v-row
                    class="border-styles"
                    align="center"
                    justify="center">
                        <v-col 
                        cols="12" 
                        sm="4" 
                        class="text-center">
                            <h1 style="color:#5fadbe"></h1>
                            <p style="color:#5fadbe"> 
                                
                            </p>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="8"
                        align="center">
                    </v-col>
                </v-row>
    </v-container>
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
    .border-styles {
        border: 1px solid #5fadbe;
        height: 40vh;
        
    }
</style>

