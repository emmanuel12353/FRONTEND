const Staff = [
    {
        staffId: 'wfm01802',
        first_name: 'victor',
        last_name: 'anthony',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a29455',
    },
    {
        staffId: 'tcs00691',
        first_name: 'mayowa',
        last_name: 'bamigbade',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a29455',
    },
    {
        staffId: 'wfm01935',
        first_name: 'emmanuel',
        last_name: 'adegboyega',
        cost_code: '0999',
        sol_id: 'Q10',
        core: 'null',
        supervisor_Id: 'a29455',
    },
    {
        staffId: 'tcs00689',
        first_name: 'stephen',
        last_name: 'oluwole',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a29455',
    },

    {
        staffId: 'wfm01967',
        first_name: 'ayomide',
        last_name: 'olubobokun',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a28264',
        
    },
    {
        staffId: 'wfm01936',
        first_name: 'adejumoke',
        last_name: 'adeyeye',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a28264',
    },
    {
        staffId: 'wfm02033',
        first_name: 'whitney',
        last_name: 'goodluck',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a28264',

    },
    {
        staffId: 'tcs01020',
        first_name: 'mary',
        last_name: 'okunoye',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        supervisor_Id: 'a31798',
    },
    {
        staffId: 'po00164',
        first_name: 'victoria',
        last_name: 'omokhoa',
        cost_code: '0999',
        sol_id: 'Q10',
        score: 'null',
        
        supervisor_Id: 'a31798',
    },
   
]

export default Staff;



export const fetchStaffDetails = async (staffId) => {
    try {
      // Find the staff member with the specified staffId
      const staffDetails = Staff.find((staff) => staff.staffId === staffId);
  
      if (!staffDetails) {
        throw new Error('Staff not found');
      }
  
      return staffDetails;
    } catch (error) {
      console.error('Error fetching staff details:', error.message);
      throw error;
    }
  };