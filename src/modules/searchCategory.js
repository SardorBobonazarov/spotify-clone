const state = {
    categoriesData: [
        {
          title: 'Podcasts',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'For You',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'New releases',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Pop',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Hip-hop',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Mood',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Dance',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Charts',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'For Gamers',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Rock',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Hindi',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Training',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Recommendation',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'K-Pop',
          imgSrc: 'disect.jpg'
        },
        {
          title: 'Relax',
          imgSrc: 'disect.jpg'
        }
    ],

    filteredCategoriesData:[
      {
        title: 'Podcasts',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'For You',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'New releases',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Pop',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Hip-hop',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Mood',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Dance',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Charts',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'For Gamers',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Rock',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Hindi',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Training',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Recommendation',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'K-Pop',
        imgSrc: 'disect.jpg'
      },
      {
        title: 'Relax',
        imgSrc: 'disect.jpg'
      }
  ],
  
  
    searchCategoryFrom: ''
}

const mutations = {
    setSearch(state, payload){
      state.searchCategoryFrom = payload;
      state.filteredCategoriesData = state.categoriesData.filter(e=>e.title.toLowerCase().includes(payload))
    }
}

export default { state, mutations }