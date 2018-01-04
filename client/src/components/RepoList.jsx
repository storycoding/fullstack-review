import React from 'react';

const RepoList = (props) => (
  <div className="margin-left">
    <h3> Repo List </h3>
    There are {props.repos.length} repos.
    
    {props.repos.map(function(repo, index){
      return (<Repo key={index} Entry={repo} />);
      })
    }
    
  </div>
);

export default RepoList;

const Repo = function(props) {
  
  //console.log('props passed to repo = ', props);  

  let privacy;
  let timeAgo = ' ' + props.Entry.updated_at.slice(0, props.Entry.updated_at.indexOf('T'));
  let network = 'https://github.com/storycoding/hrsf86-fullstack-review' + '/network';

  if (props.Entry.private === true) {
    privacy = 'Private';
  } else {
    privacy = 'Public';
  }

  return (
    <div className="col-12 d-block width-full py-4 border-bottom private fork">
      <div className="d-inline-block mb-1">
      
        <h3 className="margin-left">
          <a href={props.Entry.full_name}>
            {props.Entry.name}      
          </a>
          <span className="Label Label--outline v-align-middle ml-1 mb-1 padded">
            {privacy}
          </span>

          
        </h3>
        
        <span className="f6 text-gray mb-1 margin-left">
            Forked from <a className="muted-link underlined" href={props.Entry.full_name}>{props.Entry.full_name}</a>
        </span>

      </div>


      <div className="col-3 float-right text-right">
        <span className="mr-3" itemProp="programmingLanguage">{props.Entry.coding_language}</span>
        <a className="muted-link mr-3" href={network}>
          <svg 
            aria-label="fork" className="octicon octicon-repo-forked"
            height="16" role="img" version="1.1" viewBox="0 0 10 16"
            width="10"><path fillRule="evenodd"
            d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 
            1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 
            1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 
            1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 
            0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 
            0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 
            1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 
            0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            {props.Entry.forks_count}
        </a>
        Updated on  
        <relative-time 
          datetime={timeAgo}
          title={timeAgo}>
          {timeAgo}
        </relative-time>

      </div>

    </div>
  );

} 




// replace props.private boolean with private or public

// svg needs a link to the /network

// replace relative-time component title and inner html fields with user friendly data
      // title="Jan 2, 2018, 9:58 AM PST"
      // >7 hours ago<