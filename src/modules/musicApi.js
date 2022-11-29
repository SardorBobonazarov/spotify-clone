const state = {
    api: [
        {
          name: 'music #1',
          description: 'description #1',
          img: 'singer.jpg',
          favorite: false,
          genre: 'pop'
        },
        {
          name: 'music #2',
          description: 'description #2',
          img: 'singer.jpg',
          favorite: true,
          genre: 'jazz'
        },
        {
          name: 'music #3',
          description: 'description #3',
          img: 'singer.jpg',
          favorite: false,
          genre: 'pop'
        },
        {
          name: 'music #4',
          description: 'description #4',
          img: 'singer.jpg',
          favorite: false,
          genre: 'rock'
        },
        {
          name: 'music #5',
          description: 'description #5',
          img: 'singer.jpg',
          favorite: false,
          genre: 'classic'
        },
        {
          name: 'music #6',
          description: 'description #6',
          img: 'singer.jpg',
          favorite: true,
          genre: 'pop'
        },
        {
          name: 'music #7',
          description: 'description #7',
          img: 'singer.jpg',
          favorite: false,
          genre: 'pop'
        },
        {
          name: 'music #8',
          description: 'description #8',
          img: 'singer.jpg',
          favorite: false,
          genre: 'classic'
        },
        {
          name: 'music #9',
          description: 'description #9',
          img: 'singer.jpg',
          favorite: false,
          genre: 'pop'
        },
        {
          name: 'music #10',
          description: 'description #10',
          img: 'singer.jpg',
          favorite: false,
          genre: 'rock'
        },
        {
          name: 'music #11',
          description: 'description #11',
          img: 'singer.jpg',
          favorite: false,
          genre: 'podcasts'
        },
        {
          name: 'music #10',
          description: 'description #10',
          img: 'singer.jpg',
          favorite: false,
          genre: 'podcasts'
        }
    ],
    filteredArray: [],
}

const mutations = {
    filterImage(state, [payload, value]){
        state.filteredArray = []
        state.api.forEach(c => {
          if(c[payload] === value){
            state.filteredArray.push(c)
          }
        })
        return state.filteredArray
    }   
}

export default { state, mutations }