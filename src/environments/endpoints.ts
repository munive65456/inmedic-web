const securityMethods={
  login: 'user/login/'
}

const searchMethods={
  globalSearch: 'client/services/',
  profileDoctor: 'client/profile/',
  createRequest: 'client/cita/',
  signup: 'client/signup'
}

const doctorEnd = {
  getAppointments: 'appointment/getByDoctor/'
}

export const host = {
  ms_security:{
    methods: securityMethods, searchMethods
  },
  appointments:{
    methods: doctorEnd
  }
}
