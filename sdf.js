academic_list = { uid, field };

student_list = {
  uid,
  inscription: {
    enrollment: {
      academic_list_selection,
      grades,
    },
  },
};

// so a particular academic selections has either approved/pending data field??
// and whole enrollment will be calculated based on academic selections result and
// API should be able to show the proper result whenever hit