export const state = () => ({
  restaurants: [
    {
      inspection_id: '2453725',
      dba_name: 'CELESTE',
      aka_name: 'CELESTE',
      license_: '2197129',
      facility_type: 'Restaurant',
      risk: 'Risk 1 (High)',
      address: '111 W HUBBARD ST ',
      city: 'CHICAGO',
      state: 'IL',
      zip: '60654',
      inspection_date: '2020-10-23T00:00:00.000',
      inspection_type: 'Canvass',
      results: 'No Entry',
      latitude: '41.88990442842049',
      longitude: '-87.63159248856867',
      location: {
        type: 'Point',
        coordinates: [41.88990442842049, -87.63159248856867],
      },
    },
    {
      inspection_id: '2401714',
      dba_name: 'TEMPORIS',
      aka_name: 'TEMPORIS',
      license_: '2446729',
      facility_type: 'Restaurant',
      risk: 'Risk 1 (High)',
      address: '933 N ASHLAND AVE ',
      city: 'CHICAGO',
      state: 'IL',
      zip: '60622',
      inspection_date: '2020-09-28T00:00:00.000',
      inspection_type: 'Canvass',
      results: 'No Entry',
      latitude: '41.89890432084078',
      longitude: '-87.66722318342336',
      location: {
        type: 'Point',
        coordinates: [41.89890432084078, -87.66722318342336],
      },
    },
    {
      inspection_id: '2386745',
      dba_name: 'Yuki Hana',
      aka_name: 'SAKAE',
      license_: '2288846',
      facility_type: 'Restaurant',
      risk: 'Risk 1 (High)',
      address: '2918-2920 N Clark ST ',
      city: 'CHICAGO',
      state: 'IL',
      zip: '60657',
      inspection_date: '2020-09-02T00:00:00.000',
      inspection_type: 'Canvass',
      results: 'No Entry',
      latitude: '41.93528683052736',
      longitude: '-87.64707246891297',
      location: {
        type: 'Point',
        coordinates: [41.93528683052736, -87.64707246891297],
      },
    },
  ],
  stateData: '',
})

export const mutations = {
  addData(state) {
    state.stateData = 'Data Added'
  },
}
