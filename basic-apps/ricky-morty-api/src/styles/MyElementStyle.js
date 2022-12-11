import { css } from 'lit-element';

export default css`
:host {
  display: block;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 300px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.card-content {
  padding: 10px;
}
.card-content h2 {
  margin: 0;
}
.card-content img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 10px 10px 10px 10px;
}
.card-content p {
  margin: 0;
}
get-data {
  display: none;
}
`

