// Variables declaration
var branches = {
    "Agriculture and Mining" : [
        'Farming and Ranching',
        'Fishing, Hunting and Forestry and Logging',
        'Mining and Quarrying',
        'Agriculture & Mining Other'
        ],
    "Business Services" : [
          'Accounting and Tax Preparation',
          'Advertising, Marketing and PR',
          'Data and Records Management',
          'Facilities Management and Maintenance',
          'HR and Recruiting Services',
          'Legal Services',
          'Management Consulting',
          'Payroll Services',
          'Sales Services',
          'Security Services',
          'Business Services Other'
      ],
      "Computer and Electronics" : [
          'Audio, Video and Photography',
          'Computers, Parts and Repair',
          'Consumer Electronics, Parts and Repair',
          'IT and Network Services and Support',
          'Instruments and Controls',
          'Network Security Products',
          'Networking equipment and Systems',
          'Office Machinery and Equipment',
          'Peripherals Manufacturing',
          'Semiconductor and Microchip Manufacturing',
          'Computer and Electronics Other'
      ],
      "Consumer Services" : [
          'Automotive Repair and Maintenance',
          'Funeral Homes and Services',
          'Laundry and Dry Cleaning',
          'Parking Lots and Garage Management',
          'Personal Care',
          'Photofinishing Services',
          'Consumer Services Other'
      ],
      "Education" : [
          'Colleges and Universities',
          'Elementary and Secondary Schools',
          'Libraries, Archives and Museums',
          'Sports, Arts, and Recreation Instruction',
          'Technical and Trade Schools',
          'Test Preparation',
          'Education Other'
      ],
      "Energy and Utilities" : [
          'Alternative Energy Sources',
          'Gas and Electric Utilities',
          'Gasoline and Oil Refineries',
          'Sewage Treatment Facilities',
          'Waste Management and Recycling',
          'Water Treatment and Utilities',
          'Energy and Utilities Other'
      ],
      "Financial Services" : [
          'Banks',
          'Credit Cards and Related Services',
          'Credit Unions',
          'Insurance and Risk Management',
          'Investment Banking and Venture Capital',
          'Lending and Mortgage',
          'Personal Financial Planning and Private Banking',
          'Securities Agents and Brokers',
          'Trust, Fiduciary, and Custody Activities',
          'Financial Services Other'
      ],
      "Government"  : [
          'International Bodies and Organizations',
          'Local Government',
          'National Government',
          'State/Provincial Government',
          'Government Other'
      ],
      "Health, Pharmaceuticals, and Biotech" : [
          'Biotechnology',
          'Diagnostic Laboratories',
          'Doctors and Health Care Practitioners',
          'Hospitals',
          'Medical Devices',
          'Medical Supplies and Equipment',
          'Outpatient Care Centers',
          'Personal Health Care Products',
          'Pharmaceuticals',
          'Residential and Long-term Care Facilities',
          'Veterinary Clinics and Services',
          'Health, Pharmaceuticals, and Biotech Other'
      ],
      "Manufacturing" : [
          'Aerospace and Defense',
          'Alcoholic Beverages',
          'Automobiles, Boats and Motor Vehicles',
          'Chemicals and Petrochemicals',
          'Concrete, Glass and Building Materials',
          'Farming and Mining Machinery and Equipment',
          'Food and Dairy Product Manufacturing and Packaging',
          'Furniture Manufacturing',
          'Metals Manufacturing',
          'Nonalcoholic Beverages',
          'Paper and Paper Products',
          'Plastics and Rubber Manufacturing',
          'Textiles, Apparel and Accessories',
          'Tools, Hardware and Light Machinery',
          'Manufacturing Other'
      ],
      "Media and Entertainment" : [
          'Adult Entertainment',
          'Motion Picture Exhibitors',
          'Motion Picture and Recording Producers',
          'Newspapers, Books, and Periodicals',
          'Performing Arts',
          'Radio, Television Broadcasting',
          'Media and Entertainment Other'
      ],
      "Non-profit" : [
          'Advocacy Organizations',
          'Charitable Organizations and Foundations',
          'Professional Associations',
          'Religious Organizations',
          'Social and Membership Organizations',
          'Trade Groups and Labor Unions',
          'Non-profit Other'
      ],
      "Other" : ['Other'],
      "Real Estate and Construction" : [
          'Architecture, Engineering and Design',
          'Construction Equipment and Supplies',
          'Construction and Remodeling',
          'Property Leasing and Management',
          'Real Estate Agents and Appraisers',
          'Real Estate Investment and Development',
          'Real Estate and Construction Other'
      ],
      "Retail" : [
          'Automobile Dealers',
          'Automobile Parts and Supplies',
          'Beer, Wine and Liquor Stores',
          'Clothing and Shoe Stores',
          'Department Stores',
          'Florist',
          'Furniture Stores',
          'Gasoline Stations',
          'Grocery and Specialty Stores',
          'Hardware and Building Material Dealers',
          'Jewelry, Luggage, and Leather Goods',
          'Office Supplies Stores',
          'Restaurants and Bars',
          'Sporting Goods, Hobby, Books and Music Stores',
          'Retail Others'
      ],
      "Software and Internet" : [
          'Data Analytics, Management, and Internet',
          'Big Data',
          'E-Commerce and Internet Business',
          'Games and Gaming',
          'Software',
          'Augment reality',
          'Software and Internet Other'
      ],
      "Telecommunications" : [
          'Cable and Television Providers',
          'Telecommunications Equipment and Accessories',
          'Telephone Service Providers and Carriers',
          'Video and Teleconferencing',
          'Wireless and Mobile',
          'Telecommunications Other'
      ],
      "Transportation and Storage" : [
          'Air Couriers and Caro Services',
          'Airport, Harbor, and Terminal Operations',
          'Freight Hauling (Rail and Truck)',
          'Marine and Inland Shipping',
          'Moving Companies and Services',
          'Postal, Express Delivery and Couriers',
          'Warehousing and Storage',
          'Transportation and Storage Other'
      ],
      "Travel Recreation and Leisure" : [
          'Amusement Parks and Attractions',
          'Cruise Ship Operations',
          'Gambling and Gaming Lodging',
          'Participatory Sports and Recreation',
          'Passenger Airlines',
          'Rental Cars',
          'Resorts and Casinos',
          'Spectator Sports and Teams',
          'Taxi, Buses and Transit Systems',
          'Travel Agents and Services',
          'Travel, Recreations and Leisure Other'
      ],
      "Wholesale and Distribution" : [
          'Apparel Wholesalers',
          'Automobile Parts Wholesalers',
          'Beer, Wine and Liquor Wholesalers',
          'Chemicals and Plastics Wholesalers',
          'Grocery and Food Wholesalers',
          'Lumber and Construction Materials Wholesalers',
          'Metal and Mineral Wholesalers',
          'Office Equipment and Suppliers Wholesalers',
          'Petroleum Products Wholesalers',
          'Wholesale and Distribution Other'
      ]
};
var list = Object.keys(branches);
var urlSvg = "http://www.w3.org/2000/svg";
var i;
// DOM Speedup zone
function createElem(x){
    return document.createElement(x);
}
function _(x){
    return document.getElementById(x);
}
var fragment = document.createDocumentFragment();
//Droping parent list
function genlist(x, y){
    parDiv = _("dropPar");
    childDiv = _("dropChil");
    // Hide lists after out of branch-par or childs
    window.onclick = function(event){
        var t = event.target || event.srcElement;
        var check = (function(){
            if(t.id !== "branch-par"){
                t = t.parentNode;
                while(t){
                    if(t.id === "branch-par"  || t.className === "selectBranch"){
                        return true;
                        break;
                    }else{
                        t = t.parentNode;
                    }
                }
            }
        })();
        if(check !== true){
            launch();
            ListOverFlow(parDiv, childDiv);
        }
    }
    launch();
    if(x === undefined){
        updList(list);
    }else{
        updList(x, y);
    }
    ListOverFlow(parDiv, childDiv);
}
// generating parent list
function updList(x, y){
    x.forEach(function(branch){
        var span = createElem("span");
         span.className = "list";
        var a = createElem("a");
        a.href = "javascript:void(0)";
        a.textContent = branch;
        a.className = "parList";
        a.addEventListener("click", Sublist);
        span.appendChild(a);
        fragment.appendChild(span);
    });
    parDiv.appendChild(fragment);
    if(y !== undefined && y.length < 50){
        y.forEach(function(branch){
        var span = createElem("span");
         span.className = "list";
        var a = createElem("a");
        a.href = "javascript:void(0)";
        a.className = "childList";
        a.textContent = branch;
        a.addEventListener("click", decVal);
        span.appendChild(a);
        fragment.appendChild(span);
    });
    parDiv.appendChild(fragment);
    }
}
// List search
function respStr(){
    var x = _("brStr").value;
    var newRegExp = new RegExp(x, "i");
    var filtPar = list.filter(function(val){
        if(newRegExp.test(val) ){return val;}
    });
    var filtSub = (function(){
        var arr = [];
        list.forEach(function(val){
            branches[val].forEach(function(subVal){
                if(newRegExp.test(subVal)){
                    arr.push(subVal);
                }
            });
        });
        return arr;
    })();
    genlist(filtPar, filtSub);
}
// Generating child list
function Sublist(){
    parDiv.onclick = function(event){
        while(childDiv.firstChild){
            childDiv.removeChild(childDiv.firstChild);
        }
        var target = event.target || event.srcElement;
        var cont = target.firstChild.textContent;
        branches[cont].forEach(function(branch){
            var span = createElem("span");
             span.className = "list";
            var a = createElem("a");
            a.href = "javascript:void(0)";
            a.className = "childList";
            a.textContent = branch;
            a.addEventListener("click", decVal);
            span.appendChild(a);
            fragment.appendChild(span);
        });
        childDiv.appendChild(fragment);
        ListOverFlow(parDiv, childDiv);
    }
}
// Add events
function decVal(){
    bubling(parDiv);
    bubling(childDiv);
}
function launch(){
    while(parDiv.firstChild){
        parDiv.removeChild(parDiv.firstChild);
    }
    while(childDiv.firstChild){
        childDiv.removeChild(childDiv.firstChild);
    }
}
// Event bubling, adding final spots
function bubling(x){
    var branchPar = _("targ");
    x.onclick = function(event){
        var lim = document.getElementsByClassName("selectBranch");
        if(lim.length > 4){
            alert("you could select only 5 different branches"); 
            return;
        }
        var target = event.target || event.srcElement;
        var cont = target.firstChild.textContent;
        var newRegExp = new RegExp(cont, "i");
        if(lim.length > 0){
            for(i = 0; i < lim.length; i++){
                if(newRegExp.test(lim[i].textContent)){
                    return;
                }
            }
        }
        var div = createElem("div");
        div.className = "selectBranch";
        var Svg = svgGen();
        div.textContent = cont;
        branchPar.appendChild(div);
        div.appendChild(Svg);
        Svg.addEventListener("click", function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
        div.addEventListener("dblclick", function(){
            this.parentNode.removeChild(this);
        });
    };
}
// Generating svg
function svgGen(){
    var svg = document.createElementNS(urlSvg, "svg");
    svg.setAttribute("xmlns:svg", urlSvg);
    svg.setAttribute("viewBox", "0 0 10 8");
    svg.setAttribute("width", "10");
    svg.setAttribute("height", "8");
    var rect = document.createElementNS(urlSvg, "rect");
    rect.setAttribute("width", "10");
    rect.setAttribute("height", "8");
    rect.setAttribute("style", "fill: rgba(255, 102, 0, 0.6);");
    var line = document.createElementNS(urlSvg, "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1","0");
    line.setAttribute("x2", "10");
    line.setAttribute("y2", "8");
    line.style = "stroke: rgb(255, 255, 255); stroke-width: 1px;";
    var line2 = document.createElementNS(urlSvg, "line");
    line2.setAttribute("x1", "10");
    line2.setAttribute("y1","0");
    line2.setAttribute("x2", "0");
    line2.setAttribute("y2", "8");
    line2.style = "stroke: rgb(255, 255, 255); stroke-width: 1px;";
    svg.appendChild(rect);
    svg.appendChild(line);
    svg.appendChild(line2);
    return svg;
}
// Toggle list overFlow class
function ListOverFlow(){
    for(i = 0; i < arguments.length; i++){
        if(arguments[i].clientHeight > 199){
            arguments[i].classList.add("overFlow");
        }else{
            arguments[i].classList.remove("overFlow");
        }
    }
}
function getValue(){
    var arr = document.getElementsByClassName("selectBranch");
	return (function(){
	    var ret = [];
	    for(i = 0; i < arr.length; i++){
		    ret.push(arr[i].textContent);
		}
		return ret;
	})();
}