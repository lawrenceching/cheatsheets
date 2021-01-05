function stringify(e) {

  let str = '';

  if(e.type === 'text') {
    str += e.value;
  }

  if(Array.isArray(e.children)) {
    for(const child of e.children) {
      str += stringify(child);
    }
  }

  return str;

}

function getTableHeadersFromTableHeader(thead) {
  const trs = thead.children;
  const tr = trs[0];
  const ths = tr.children;
  return ths.map(e => stringify(e));
}

function getTableRowsFromTableBody(tbody) {
  const trs = tbody.children;
  return trs.map(tr => {
    return tr.children.map(e => stringify(e));
  })
}

function hastTableToJavaScriptTable(root) {
   if(root.tagName !== 'table') {
     throw new Error('root must be a table tag');
   }

   const data = {
     headers: [],
     rows: []
   }

  const thead = root.children[0];
  data.headers = getTableHeadersFromTableHeader(thead);

  const tbody = root.children[1];
  data.rows = getTableRowsFromTableBody(tbody);

  return data;
}

export default hastTableToJavaScriptTable;
export { stringify };