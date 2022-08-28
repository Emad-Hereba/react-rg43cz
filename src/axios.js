import axios from "axios";

componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
}