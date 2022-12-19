import{S as h,C as d,_ as e,a as p,T as l,b as u,c as m,d as g,h as y,G as w,f as C,i as v,j as W,m as f,E as T,k as A,l as S,A as E}from"./index.2c8903ec.js";class s extends h{constructor(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,r,i,n);super(c,a,o),e(this,"abi",void 0),e(this,"metadata",void 0),e(this,"roles",void 0),e(this,"sales",void 0),e(this,"platformFees",void 0),e(this,"encoder",void 0),e(this,"estimator",void 0),e(this,"events",void 0),e(this,"royalties",void 0),e(this,"signature",void 0),e(this,"interceptor",void 0),e(this,"erc1155",void 0),e(this,"owner",void 0),this.abi=i,this.metadata=new p(this.contractWrapper,l,this.storage),this.roles=new u(this.contractWrapper,s.contractRoles),this.royalties=new m(this.contractWrapper,this.metadata),this.sales=new g(this.contractWrapper),this.encoder=new y(this.contractWrapper),this.estimator=new w(this.contractWrapper),this.events=new C(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new W(this.contractWrapper),this.signature=new f(this.contractWrapper,this.storage,this.roles),this.erc1155=new T(this.contractWrapper,this.storage,o),this.owner=new A(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(S("transfer"),E)}async mint(t){return this.erc1155.mint(t)}async mintTo(t,r){return this.erc1155.mintTo(t,r)}async mintAdditionalSupply(t,r){return this.erc1155.mintAdditionalSupply(t,r)}async mintAdditionalSupplyTo(t,r,a){return this.erc1155.mintAdditionalSupplyTo(t,r,a)}async mintBatch(t){return this.erc1155.mintBatch(t)}async mintBatchTo(t,r){return this.erc1155.mintBatchTo(t,r)}async burn(t,r){return this.erc1155.burn(t,r)}async call(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return this.contractWrapper.call(t,...a)}}e(s,"contractRoles",["admin","minter","transfer"]);export{s as Edition};
