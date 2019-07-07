<template>
<v-layout>
    <v-flex xs12 sm6>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>All Blogs(FancyBlog)</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="item in items"
              :key="item.id"
              v-bind="{ [`xs${item.flex}`]: true }"
            >
              <v-card>
                <v-img
                  :src="item.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline black--text">Title: {{item.title}}</span> <br>
                        <span class="headline black--text">Date: {{item.created_at | timestamp_format}}</span><br> <br>
                        <p class="headline black--text">Description: {{item.description}}</p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            message: 'Nuxt js Blog',
            env: process.env.backendAPIBaseURL,
            items: []
        }
    },
    mounted () {
        console.log('message', this.message)
        this.$axios
        .get(this.env + '/api/blogs/')
        .then(response => {
            console.log('response: ', response)
            this.items = response.data.results
            console.log('this.items: ', this.items)
        })
        .catch(error => console.log(error))
    }
}
</script>

<style>
.title {
    text-align: center;
    text-decoration: underline;
}
</style>