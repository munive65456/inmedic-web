const securityMethods={
  login: 'user/login/'
}

const searchMethods={
  globalSearch: 'client/services/',
  profileDoctor: 'client/profile/',
  createRequest: 'client/cita/',
  signup: 'client/signup',
  rechazarCita: 'appointment/reject'
}

const doctorEnd = {
  getAppointments: 'appointment/getByDoctor/',
  approveDate: 'appointment/approve/'
}

export const host = {
  ms_security:{
    methods: securityMethods, searchMethods
  },
  appointments:{
    methods: doctorEnd
  }
}
