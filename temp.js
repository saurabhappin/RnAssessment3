if (!isNameValue || !isEmailValue || !isPasswordValue || !isConfirmPassword) {
  Alert.alert('Please fill all fields!');
} else if (isChecked) {
  Alert.alert('Please fill all fields!');
} else if (!emailValid) {
  Alert.alert('Please enter a valid email!');
} else if (!passwordValid) {
  Alert.alert(`
    Password must contain: \n
    -At least an Uppercase Alphabet \n
    -At least one Numerical Value \n
    -At least one Special Character \n
    -Should be at least 8 characters long.`);
} else if (!passwordMatch) {
  Alert.alert('Passwords do not match!');
} else {
  <>
    <Text style={styles.modalHeading}>Success!{'\n'}</Text>
    <Text style={styles.modalText}>
      Welcome {isNameValue}! {'\n'}({isEmailValue})
    </Text>
  </>;
}
