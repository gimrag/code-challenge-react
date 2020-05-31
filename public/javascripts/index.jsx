class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
      filter: "",
      selectedMenu:{},
      filteredMenuItems: [],
      menuSections: [],
      selectedTheme: "list",
      favorids: {}
    };
    this.search = this.search.bind(this);
    this.searchBoxOnChange = this.searchBoxOnChange.bind(this);
    this.listButtonOnClick = this.listButtonOnClick.bind(this);
    this.gridButtonOnClick = this.gridButtonOnClick.bind(this);
    this.favoridButtonOnClick = this.favoridButtonOnClick.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  
  search(props){
    var str=props.str;
    if(!!str){
      var filteredMenuItems=this.state.restaurant.active_menu.menu.items;
      var menuSections=[];
      var menuItemOrder=this.state.restaurant.active_menu.menu.item_order;
        filteredMenuItems=filteredMenuItems.filter(function (item) {
          if (item.item.name.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
            if (!menuSections.includes(item.section)) {
              menuSections.push(item.section);
            }
          }
          return item.item.name.toLowerCase().indexOf(str.toLowerCase()) !== -1;
        });
        var orderStr=menuItemOrder.map((order, orderKey) =>{
          return (
            order.items.map((orderItem, orderItemKey) =>{
              return (
              order.section+orderItem
            )})
          )}
        );
      this.setState({filter:str,filteredMenuItems:filteredMenuItems,menuSections:menuSections});
    }else{
      this.setState({filter:"",filteredMenuItems:this.state.restaurant.active_menu.menu.items,menuSections:this.state.restaurant.active_menu.menu.sections});
    }
  }
  
  changeTheme(props){
    if(!!props.theme){
      this.setState({selectedTheme:props.theme});
    }
  }

  toggleFavorite(props){
    if(!!props.item && !!props.item.id){
      var favorids=this.state.favorids;
      if(favorids[props.item.id]!=1){
        favorids[props.item.id]=1;
      }else{
        favorids[props.item.id]=0;
      }
      this.setState({favorids:favorids});
    }
  }

  listButtonOnClick(){
    this.changeTheme({theme:"list"});
  }

  gridButtonOnClick(){
    this.changeTheme({theme:"grid"});
    
  }

  favoridButtonOnClick(e){
    var idx=parseInt(e.target.value);
    this.toggleFavorite({item:this.state.filteredMenuItems[idx]});
  }

  searchBoxOnChange(e){
    this.setState({filter: e.target.value});
    this.search({str:e.target.value});
  }

  render() {
    if(this.state.restaurant==null){
      this.state.restaurant = window.data.restaurant;
      this.state.selectedMenu=window.data.restaurant.active_menu;
      this.state.menuSections=window.data.restaurant.active_menu.menu.sections;
      this.state.filteredMenuItems=window.data.restaurant.active_menu.menu.items;
    }
    var menuDetail;
    if(this.state.selectedTheme==="grid"){
      menuDetail= this.state.filteredMenuItems.map((item, i) => (
              <div className="card  text-center" key={i}>
                <img src={!!item.item.images[0] ? item.item.images[0]["200"] : "../images/meal-default-icon_100.png"} className="card-img-top gridCardImage" alt="..."/>
                <div className="card-body  text-wrap width400">
                  <h4 className="card-title">{item.item.name}</h4>
                </div>
              </div>
          )
        );
    }else{
      menuDetail= this.state.menuSections.map((section, index) => {
        return (
          <div key={index}>
            <h2 className="text-divider"><span>{section}</span></h2>
            {this.state.filteredMenuItems.map((item, i) => (
              item.section==section ? 
              <div className="card mb-3 shadow" key={i}>
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <img src={!!item.item.images[0] ? item.item.images[0]["200"] : "../images/meal-default-icon_100.png"} className="card-img listCardImage" key={i} />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                    <div className="float-right"><h4 className="card-title listCardPrice">{item.item.price} TL</h4></div>
                      <h4 className="card-title listCardName">{item.item.name}</h4>
                      <p className="card-text">{item.item.ingredients.join(", ")} </p>
                      <p className="card-text">
                        <small className="text-muted"></small>
                      </p>
                      <div className="float-right">
                        <button className="btn btn btn-outline-secondary btn-lg" value={i} onClick={e => this.favoridButtonOnClick(e)}>
                          <img src="../images/heart.png" />
                          <span className={!!this.state.favorids[item.id] && this.state.favorids[item.id]==1 ? "ml-1 font-weight-bold" : "ml-1"} >{!!this.state.favorids[item.id] && this.state.favorids[item.id]==1 ? "Favorilerde" : "Favorilere Ekle"}</span> 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              ""
            ))}
          </div>
        );
      });
    }
    return (
      
      <div>
        <h1>{this.state.restaurant.name}</h1>
        <h1>{!!this.state.selectedMenu ? this.state.selectedMenu.menu_name : ""}</h1>
        <br/><br/>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Arama yap</label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="exampleFormControlInput1"
            placeholder="Yemek adına göre"
            value={this.state.filter}
            onChange={this.searchBoxOnChange}
          />
          <br/>
          <div className="themeBtnGroup">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-light themeButton" onClick={this.listButtonOnClick}>List</button>
              <button type="button" className="btn btn-light themeButton" onClick={this.gridButtonOnClick}>Grid</button>
            </div>
          </div>
        </div>
        <div className={this.state.selectedTheme==="grid" ? "d-flex d-flex justify-content-around align-content-around flex-wrap" : ""}>{menuDetail}</div>
        <div></div>
      </div>
    );
  }
}


$(function() {
  ReactDOM.render(
    <Restaurant/>,
    document.getElementById('react-root')
  );

})
