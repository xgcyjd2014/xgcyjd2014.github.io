---
layout: post
title: Thinking in React 
author: Xukm
tagpic: react.png
description:  关于reactJs 的一些学习历程
category: js
keywords: 技术,react
---

## Thinking in React

### 开始一个栗子

我们要做的是这样一个例子
[shootpic](http://fightingm.github.io/blog/dist/img/thinking-in-react-mock.png)
后台返回的数据应该是这样的:

```js
[	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"}
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"}
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"}
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"}
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}];
```
### 第一步：把视图拆分成一个个组件

怎么样拆分组件呢？原则只有一个，就是每一个组件应该只做一件事，如果当前组件做了很多事，应该继续分解这个组件,因为最终用户所看到的界面和我们的数据模型往往有着一样的信息结构，我们只需要根据数据的结构来分解我们的组件

[shootpic](http://fightingm.github.io/blog/dist/img/thinking-in-react-components.png)

可以看到最终我们把这个简单的页面分解成5个不同的组件，让我们来分析一下这五个组件的各自功能:

1. 1.FilterableProductTable (orange): 最外层的组件
2. 2.SearchBar (blue): 接受用户输入的组件
3. 3.ProductTable (green): 展示用户搜索到的所有数据
4. 4.ProductCategoryRow (turquoise): 展示商品的类别
5. 5.ProductRow (red): 展示每个商品的相关信息

如果你仔细观察	ProductTable组件，会发现有个表格的标题不属于这个组件，这是个人喜好问题，在这里我把它放在ProductTable组件里因为它是渲染数据集合的一部分，而ProductTable就是用来渲染数据的。但是，如果header部分后期有其他字段添加进来而变得复杂，就需要把它拆分为一个独立的ProductTableHeader组件
现在我们已经划分好组件了，让我们把他们整理成一个层次结构

* 	`.FilterableProductTable`
* &emsp;`.SearchBar`
* &emsp;`.ProductTable`
* &emsp;&emsp;`.ProductCategoryRow`
* &emsp;&emsp;`.ProductRow`

### 第二步 用React写一个静态版本

```js
var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});
var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: \red\}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});
var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
	 </thead>
    <tbody>{rows}</tbody>
  </table>
    );
  }
});
var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {\ \}
          Only show products in stock
        </p>
      </form>
    );
  }
});
var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});
var PRODUCTS = [
  {category: \Sporting Goods\ price: \$49.99\ stocked: true, name: \Football\},
  {category: \Sporting Goods\ price: \$9.99\ stocked: true, name: \Baseball\},
  {category: \Sporting Goods\ price: \$29.99\ stocked: false, name: \Basketball\},
  {category: \Electronics\ price: \$99.99\ stocked: true, name: \iPod Touch\},
  {category: \Electronics\ price: \$399.99\ stocked: false, name: \iPhone 5\},
  {category: \Electronics\ price: \$199.99\ stocked: true, name: \Nexus 7\}
];
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
document.getElementById(\container\)
);
```
	
现在我们已经写好了自己的组件结构，我们可以运行我们的程序了，但是目前我们的程序仅仅把数据渲染到页面上
并没有实现交互功能，所有的数据都是通过props传入的，而props是不可变的，所以我们需要为我们的app添加一下交互功能
当然，我们需要用到state来帮助我们实现交互
### 第三步找出所有需要用到的state
因为我们的程序是通过底层数据渲染的，所以要实现交互，就要让底层数据可以改变，state可以很简单的实现这个
我们不应该将所有的数据都保存为state变量，只需要找出构建应用所需要的最少的state数据
首先思考应用中的所有数据：
	* &emsp;最初的products列表
    * &emsp;用户的输入
    * &emsp;用户的勾选
    *  &emsp;过滤后的products列表
	
    在这些数据中只有用户的输入和勾选是会随着时间改变而且无法根据其他数据计算出来的，所以最终的state是：
	
    * &emsp;用户的输入
    * &emsp;用户的勾选
	
### 第四步 确认state的生命周期

我们已经找出了state集合，接下来需要知道哪个组件应该拥有这些state
这里我们需要知道，react中数据是沿着组件树从上到下单向流动的
对于每一个state：

1. 找出每一个基于那个 state 渲染界面的组件。
2.找出共同的祖先组件（某个单个的组件，在组件树中位于需要这个 state 的所有组件的上面）。
3. 要么是共同的祖先组件，要么是另外一个在组件树中位于更高层级的组件应该拥有这个 state 。
4. 如果找不出拥有这个state 数据模型的合适的组件，创建一个新的组件来维护这个 state ，然后添加到组件树中，层级位于所有共同拥有者组件的上面。

在我们这个程序中：

* ProductTable 需要基于 state 过滤产品列表，SearchBar 需要显示搜索文本和复选框状态。
* 共同拥有者组件是 FilterableProductTable 。
* 理论上，过滤文本和复选框值位于 FilterableProductTable 中是合适的。

所以只需要把我们的静态版本中对应部分进行更改

```js
var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
      inStockOnly: false
    };
  },
  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
});
```
	
然后是searchBar组件
	
```js
var SearchBar = React.createClass({
  render: function() {
    return ( 
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} />
          {\ \}
          Only show products in stock
        </p>
      </form>
    );
  }
});
```

接着在ProductTable里面加上入户输入的过滤

```js		
if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
    return;
}
```
	
注意，这里需要手动绑定this到当前组件

### 第五步：添加反向数据流
	
到目前为止，已经构建了渲染正确的基于 props 和 state 的沿着组件树从上至下单向数据流动的应用。现在，是时候支持另外一种数据流动方式了：组件树中层级很深的表单组件需要更新 FilterableProductTable 中的 state 。
React 让这种数据流动非常明确，从而很容易理解应用是如何工作的，但是相对于传统的双向数据绑定，确实需要输入更多的东西。 React 提供了一个叫做 ReactLink 的插件来使其和双向数据绑定一样方便，但是考虑到这篇文章的目的，我们将会保持所有东西都直截了当。
如果你尝试在示例的当前版本中输入或者选中复选框，将会发现 React 会忽略你的输入。这是有意的，因为已经设置了 input 的 value 属性，使其总是与从 FilterableProductTable 传递过来的 state 一致。	让我们思考下我们希望发生什么。我们想确保无论何时用户改变了表单，都要更新 state 来反映用户的输入。由于组件只能更新自己的 state ， FilterableProductTable 将会传递一个回调函数给 SearchBar ，此函数将会在 state 应该被改变的时候触发。我们可以使用 input 的 onChange 事件来监听用户输入，从而确定何时触发回调函数。

FilterableProductTable 传递的回调函数将会调用 setState() ，然后应用将会被更新。
虽然这听起来有很多内容，但是实际上仅仅需要几行代码。并且关于数据在应用中如何流动真的非常清晰明确。
首先在FilterableProductTable组件中写一个handleUserInput事件，并将事件传递给SearchBar组件中

```js
handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }
<SearchBar
  filterText={this.state.filterText}
  inStockOnly={this.state.inStockOnly}
  onUserInput={this.handleUserInput}
/>
```

然后在SearchBar组件中调用这个事件来改变state

```js
handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }
<input
  type="text"
  placeholder="Search..."
  value={this.props.filterText}
  ref="filterTextInput"
  onChange={this.handleChange}
/>
```

现在我们的程序就可以根据用户的操作来显示对应的数据了