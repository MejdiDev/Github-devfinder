import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import './index.css';

const SearchResult = (props) => {
  return(
    <div className={'SearchResultWrapper' + ((document.querySelector('#themeChanger h1').innerText === 'DARK') ? ' light' : '')} id="SearchResult" onClick={props.onClick}>
      <img src={props.src} alt={props.username + " image"} />
      <h3>{props.username}</h3>
    </div>
  );
}

const ProfileDetails = (props) => {
  return(
    <div id="wrapperAll">
      <div id="profileDetails" onClick={props.onClick}>
        <div id="general">
          <img src={props.details.src} alt={props.details.name + "-image"} />

          <div id="data-container">
            <div id="data">
              <div id="drop-container">
                <a id="login" href={"http://github.com/" + props.details.login} target="blank">{props.details.name}</a>
                <p>{props.details.joined}</p>
              </div>
              <a href={"http://github.com/" + props.details.login} target="blank">@{props.details.login}</a>
              <p id="bio">{props.details.bio}</p>
            </div>

            <div id="numbers">
              <div><p id="repos">Repos</p><p>{props.details.repos}</p></div>
              <div><p id="followers">Followers</p><p>{props.details.followers}</p></div>
              <div><p id="following">Following</p><p>{props.details.following}</p></div>
            </div>

            <div id="furtherData">
              <div class={!props.details.location ? "" : "active"}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="link-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" class="st-current"></path>
                </svg>
                <p>{!props.details.location ? "Not Available" : props.details.location}</p>
              </div>

              <div class={!props.details.twitter ? "" : "active"}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="link-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
                <p>{!props.details.twitter ? "Not Available" : props.details.twitter}</p>
              </div>

              <div class={!props.details.blog ? "" : "active"}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="link-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <p>{!props.details.blog ? "Not Available" : (<a target="blank" href={props.details.blog}>{props.details.blog}</a>)}</p>
              </div>

              <div class={!props.details.company ? "" : "active"}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="link-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M15.285.089A.5.5 0 0115.5.5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-6a.5.5 0 01.418-.493l5.582-.93V3.5a.5.5 0 01.324-.468l8-3a.5.5 0 01.46.057zM7.5 3.846V8.5a.5.5 0 01-.418.493l-5.582.93V15h8v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.222l-7 2.624z" clip-rule="evenodd" class=""></path>
                  <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z" clip-rule="evenodd"></path>
                  <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"></path>
                </svg>
                <p>{!props.details.company ? "Not Available" : props.details.company}</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="RepoFoll">
        <button onClick={props.numbersOnClick}>
          Repos
        </button>

        <button onClick={props.numbersOnClick}>
          Followers
        </button>
      </div>

      <div id="moreData">
        {props.details.urlData.array.map((item, index) => {
          switch(props.details.urlData.type){
            case "repos":
              return (
                <div className={(document.querySelector('#themeChanger h1').innerText === 'DARK') ? ' light' : ''} key={item.name + "-" + index} id="urlElement">
                  <a target="blank" href={item.url}><h3 className={(document.querySelector('#themeChanger h1').innerText === 'DARK') ? ' light' : ''}>{item.name}</h3></a>
                  <p>{item.description}</p>
                </div>
              );

            case "followers":
              return (
                <a key={item.name + "-" + index} target="blank" href={item.url}>
                  <div className={(document.querySelector('#themeChanger h1').innerText === 'DARK') ? ' light' : ''} id="urlElement">
                    <img src={item.src} alt={item.name + "-image"} />
                    <h3 className={(document.querySelector('#themeChanger h1').innerText === 'DARK') ? ' light' : ''}>{item.name}</h3>
                  </div>
                </a>
              );
          }
        })}
      </div>
    </div>
  );
}

const App = () => {
  const [search , setSearch] = useState("");
  const [data , setData] = useState([]);
  const [total , setTotal] = useState(0);
  const [counter , setCounter] = useState(1);
  const [profile , setProfile] = useState({urlData: {array: []}});

  const url = 'https://api.github.com/search/users?per_page=6';
  const Authkey = `Basic Bearer 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`;

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const setProfileData = (url) => {
    axios.get(url)
    .then(res => {
      res = res.data;
      
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

      let date = new Date(res.created_at);

      date = date.getDay() + " " + months[date.getMonth()] + " " + date.getFullYear();
      
      setProfile({
        src: res.avatar_url,
        bio: res.bio,
        name: res.name,
        login: res.login,
        joined: date,
        repos: res.public_repos,
        followers: res.followers,
        following: res.following,
        location: res.location,
        twitter: res.twitter_username,
        blog: res.blog,
        company: res.company,
        repos_url: res.repos_url,
        followers_url: res.followers_url,
        urlData: {array: []}
      });
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target.children[1].value.trim() !== ""){
      document.querySelector('#profileDetails').style.display = "none";
      document.querySelector('#moreData').style.display = "none";
      document.querySelector('#notFound').style.display = "none";
      document.querySelector('#results').style.display = "flex";

      axios((url + "&q=" + search), {headers: {Authorization: Authkey}})
      .then(res => {
        setData(res.data.items);
        setTotal(res.data.total_count);

        if(res.data.total_count === 1){
          setProfileData('https://api.github.com/users/' + res.data.items[0].login);
          setData([]);
          document.querySelector('#results').style.display = "none";
          document.querySelector('#profileDetails').style.display = "flex";
          document.querySelector('#totalResults').style.display = "block";
          document.querySelector('#RepoFoll').style.display = "flex";
        }

        else if(res.data.total_count === 0){
          document.querySelector('#results').style.display = "none";
          document.querySelector('#notFound').style.display = "flex";
        }

        else{
          document.querySelector('#RepoFoll').style.display = "none";
          document.querySelector('#profileDetails').style.display = "none";
          document.querySelector('#results').style.display = "flex";
          document.querySelector('#totalResults').style.display = "block";
        }
      });

      setCounter(1);
    }
  }

  const chooseUser = (e) => {
    let final_url = 'https://api.github.com/users/';

    if(e.target.tagName === "IMG" || e.target.tagName === "H3"){
      final_url += e.target.parentNode.children[1].innerText;
    }

    else{
      final_url += e.target.children[1].innerText;
    }

    setProfileData(final_url);

    setData([]);
    document.querySelector('#results').style.display = "none";
    document.querySelector('#profileDetails').style.display = "flex";

    document.querySelector('#RepoFoll').style.display = "flex";
  }

  const goToPage = (e) => {
    let counter_final = 0;
    let total_final = 0;

    if(e.target.id === "nextButton"){
      counter_final = counter + 1;
      total_final = total - 6;
    }

    else{
      counter_final = counter - 1;
      total_final = total + 6;
    }

    setCounter(counter_final);

    axios((url + "&page=" + (counter_final) + "&q=" + search), {headers: {Authorization: Authkey}})
    .then(res => {
      setData(res.data.items);
    });

    setTotal(total_final);
  }

  const showMoreData = (e) => {
    const txt = e.target.innerText.toLowerCase();
    const moreData = document.querySelector('#moreData');

    moreData.style.display = "flex";
      
      axios.get(profile[txt + "_url"], {headers: {Authorization: Authkey}}).then(result => {
        const array = [];

        switch(txt){
          case "repos":
            result.data.forEach(item => {array.push({
              name: item.name, description: item.description, url: item.html_url
            })});

            setProfile({...profile ,urlData: {type: "repos", array: array}});
          break;

          case "followers":
            result.data.forEach(item => {array.push({
              name: item.login, src: item.avatar_url, url: item.html_url
            })});

            setProfile({...profile ,urlData: {type: "followers", array: array}});
          break;
        }
      });
    }
  

  const changeTheme = (e) => {
    let currentTheme;

    switch(e.target.tagName){
      case 'DIV':
        currentTheme = e.target.children[0];
      break;

      case 'H1':
        currentTheme = e.target;
      break;

      case 'SVG':
        currentTheme = e.target.parentNode.children[0];
      break;

      default:
        currentTheme = e.target.parentNode.children[0];
    }

    if(currentTheme.innerText === "LIGHT"){
      document.getElementById('sunSvg').style.display = "none";
      document.getElementById('moonSvg').style.display = "block";

      document.querySelectorAll("#furtherData div p").forEach(item => {
        item.classList.add('light');
      });

      $('*').addClass("light");

      currentTheme.innerText = "DARK";
    }

    else if(currentTheme.innerText === "DARK"){
      document.getElementById('sunSvg').style.display = "block";
      document.getElementById('moonSvg').style.display = " none";

      $('*').removeClass("light");

      currentTheme.innerText = "LIGHT";
    }
  }

  useEffect(() => {
    const nextButton = document.querySelector('#nextButton');
    const previousButton = document.querySelector('#previousButton');
    const control = document.querySelector('#control');

    nextButton.style.display = (total > 6) ? "block" : "none";
    previousButton.style.display = (counter > 1) ? "block" : "none";
    control.style.justifyContent = (total > 6) ? ((counter > 1) ? "space-between" : "flex-end") : "none";
    control.style.marginBottom = (total > 6) ? "30px" : "0";

  }, [total]);

  useEffect(() => {
    document.querySelectorAll("#furtherData div p").forEach(item => {
      if(item.innerText === "Not Available"){
        item.parentNode.style.opacity = "0.6";
        item.parentNode.style.cursor = "text";
      }

      else{
        item.parentNode.style.opacity = "1";
        item.parentNode.style.cursor = "pointer";
      }
    });

    if(profile.bio === null){
      document.querySelectorAll("#bio").forEach(item => {
        item.style.display = "none";
      });
    }

    else{
      document.querySelectorAll("#bio").forEach(item => {
        item.style.display = "block";
      });
    }
  }, [profile]);

  return(
    <div id="container">
      <div id="settings">
        <h1 id="logo">devfinder</h1>
        <div onClick={changeTheme} id="themeChanger">
          <h1>LIGHT</h1>

          <svg id="sunSvg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>

          <svg id="moonSvg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <svg stroke="rgb(0, 119, 255)" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input placeholder="Search Github username..." value={search} onChange={handleChange} type="text" id="searchBar" />
      
        <input type="submit" value="Search" />
      </form>

      <p id="totalResults">total results: {total}</p>

      <div id="results">
        <div id="control">
          <button onClick={goToPage} id="previousButton">Previous</button>
          <button onClick={goToPage} id="nextButton">Next</button>
        </div>

        {data.map((item) => <SearchResult onClick={chooseUser} key={item.id} username={item.login} src={item.avatar_url} />)}
      </div>

      <div id="notFound">
        We're sorry, There is no user with this username on github!
      </div>

      <ProfileDetails numbersOnClick={showMoreData} id="profileDetails" details={profile} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));