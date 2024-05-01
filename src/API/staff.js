import axios from "axios";

export const fetchStaffDetails = async (staffId) => {
    try {
        const response = await axios.get('https://uba-outsourced.onrender.com/v1/staff');

        const Staff = response.data.staffList;

      // Find the staff member with the specified staffId
      const staffDetails = Staff.find((staff) => 
      staff.staffId === staffId
      );
   
      if (!staffDetails) {
        throw new Error('Staff not found');
      }
  
      return staffDetails;
    } catch (error) {
      console.error('Error fetching staff details:', error.message);
      throw error;
    }
  };