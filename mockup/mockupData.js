const Repo = (props) => (
  <div>
  
    <h3>
      <a href={props.full_name}>
        {props.name}      
      </a>
      <span>
        {props.private} 
      </span>

      <span>
        Forked from <a href={props.full_name}>{props.full_name}</a>
      </span>
    </h3>    
    
    <div>
      <span style="background-color:#f1e05a;">.</span>
      <span>{props.coding_language}</span>
      <a class="muted-link mr-3" href="/storycoding/hrsf86-self-assessment-week-04-v3/network">
        <svg 
          aria-label="fork" 
          class="octicon octicon-repo-forked"
          height="16" role="img" version="1.1" viewBox="0 0 10 16"
          width="10"><path fill-rule="evenodd"
          d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            {props.forks_count}
      </a>
      Updated
      <relative-time 
        datetime={props.updated_at}
        title={props.updated_at}>
        {props.updated_at}
      </relative-time>

    </div>

  </div>
);

var props = {
  coding_language : 'javascript',
  forks_count: 32,
  full_name : 'octocat/git-consortium',
  name : 'git-consortium',
  private : false,  
  updated_at :'2016-12-06T13:06:37Z'
}