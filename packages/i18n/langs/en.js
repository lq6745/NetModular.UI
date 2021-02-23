module.exports = {
  unified: {
    id: 'id', //编号
    add: 'add', //添加
    delete: 'delete', //删除
    export: 'export', //导出
    preview: 'preview', //预览
    edit: 'edit', //编辑
    query: 'query', //查询
    reset: 'reset', //重置
    addNew: 'addNew', //新增
    View: 'View', //查看
    operation: 'operation', //操作
    Close: 'Close', //关闭
    Save: 'Save', //保存
    Repeat: 'Repeat', //手动转发
    SaveSuccess: 'SaveSuccess', //保存成功
    selectcolumn: 'selectcolumn', //选择列
    Advancedquery: 'Advancedquery', //高级查询
    Details: 'Details', //详情预览
    creator: 'creator', //创建人
    createdTime: 'createdTime', //创建时间
    DepartmentStructure: 'DepartmentStructure', //部门架构
    organizationStructure: 'organizationStructure', //组织机构
    ChoiceCompany: 'ChoiceCompany', //选择公司
    ChoiceArea: 'ChoiceArea', //选择区域
    ChoiceWlcompany: 'ChoiceWlcompany', //选择物流公司
    choiceDriver: 'choiceDriver', //选择司机
    ChoiceStock: 'ChoiceStock', //选择物料
    CheckAll :'Check All' //全选
  },
  test: {
    defaultButton:'defaultButton',//默认按钮
  },
  master: {
    supplier: {
      companyId: 'companyId', //所属公司
      supplier: 'supplier', //供应商
      supplierList: 'supplierList', //供应商列表
      cFullName: 'cFullName', //供应商全称
      cSimpName: 'SimpName', //供应商简称
      cCompCode: 'cCompCode', //供应商代码
      cRegCode: 'cRegCode', //组织机构代码
      cTaxAccount: 'cTaxAccount', //税号
      cBankName: 'cBankName', //开户银行
      cBankUser: 'cBankUser', //帐户名
      cBankAccount: 'cBankAccount', //银行账号
      sysCompType: 'sysCompType', //供应商类别
      sysGrade: 'sysGrade：', //信誉等级：
      area: 'area', //所属行政区域：
      cEnterpriseNature: 'cEnterpriseNature', //所属行业：
      cFirstTime: 'cFirstTime', //初次合作时间：
      cHeader: 'cHeader', //法人代表：
      cAddress: 'cAddress', //地址：
      cPostCode: 'cPostCode', //邮政编码：
      cLinkman: 'cLinkman', //联系人：
      cMail: 'cMail', //电子邮件：
      cPhone: 'cPhone', //电话：
      cFax: 'cFax', //传真：
      cWeb: 'cWeb', //网址：
      iStatus: 'iStatus', //状态：
      cMemo: 'cMemo', //备注
      message1: 'message1', //请输入供应商代码
      message2: 'message2', //请输入组织机构代码
      message3: 'message3', //请输入供应商全称
      message4: 'message4', //请输入供应商简称
      message5: 'message5', //请输入税号
      message6: 'message6', //请选择供应商类别
      message7: 'message7', //请选择信用等级
      message8: 'message8', //请选择初次合作时间
      message9: 'message9' //请选择状态
    },
    company: {
      company: 'company', //公司
      companyList: 'companyList', //公司列表
      sysFaID: 'sysFaID', //父级ID
      cCompCode: 'cCompCode', //公司代码
      cRegCode: 'cRegCode', //组织机构代码
      cFullName: 'cFullName', //公司全称
      cSimpName: 'cSimpName', //公司简称
      cTaxAccount: 'cTaxAccount', //税号
      cBankName: 'cBankName', //开户银行
      cBankUser: 'cBankUser', //帐户名
      sysCompType: 'sysCompType', //公司行业类别
      area: 'sysGovAreaCode', //所属行政区域
      cHeader: 'cHeader', //法人代表
      cAddress: 'cAddress', //地址
      cPostCode: 'cPostCode', //邮政编码
      cLinkman: 'cLinkman', //联系人
      cMail: 'cMail', //电子邮件
      cPhone: 'cPhone', //电话
      cFax: 'cFax', //传真
      cWeb: 'cWeb', //网址
      iStatus: 'iStatus', //状态
      cMemo: 'cMemo', //备注
      sort: 'sort', //排序
      itype: 'itype', //公司性质
      interfaceAddress1: 'interfaceAddress1', //接口地址1
      interfaceAddress2: 'interfaceAddress2', //接口地址2
      interfaceAddress3: 'interfaceAddress3', //接口地址3
      agentId: 'agentId', //钉钉微应用ID
      appKey: 'appKey', //微应用AppKey
      appSecret: 'appSecret', //微应用AppSecret
      otherCompanyId: 'otherCompanyId', //第三方公司ID
      companyFrame: 'companyFrame', //公司架构
      companyOrg: 'companyOrg', //公司机构
      message1: 'message1', //请输入公司代码
      message2: 'message2', //请输入组织机构代码
      message3: 'message3', //请输入公司全称
      message4: 'message4', //请输入公司简称
      message5: 'message5' //请选择公司性质
    },
    roleCompany: {
      roleList: 'roleList', //角色列表
      title: 'title' //标题显示内容
    },
    departmentCompany: {
      title: 'title' //标题显示内容
    },
    businessArea: {
      businessAreaList: 'businessAreaList', //区域设置列表
      businessArea: 'businessArea', //区域设置
      sysFaId: 'sysFaId', //父节点
      cCode: 'cCode', //区域编码
      cName: 'cName', //区域名称
      cMemo: 'cMemo', //备注
      iOrder: 'iOrder', //排序
      businessAreaFrame: 'businessAreaFrame', //区域架构
      businessAreaOrg: 'businessAreaOrg', //区域机构
      message1: 'message1', //区域编码必填
      message2: 'message2', //区域名称必填
      selectArea: 'selectArea' //请选择区域
    },
    businessAreaEmployee: {
      businessAreaEmployeeList: 'businessAreaEmployeeList', //区域人员关系表列表
      businessAreaEmployee: 'businessAreaEmployee', //区域人员关系表
      areaId: 'areaId', //区域Id
      employeeId: 'employeeId', //人员编号
      businessAreaName: 'businessAreaName', //区域名称
      employeeName: 'employeeName', //人员名称
      companyName: 'companyName', // 公司名称
      deptName: 'deptName', //部门架构
      choiceEmployee: 'choiceEmployee', //选择人员
      tip: '已选择{0}位' //已选择{0}位
    },
    wareHouse: {
      wareHouseList: 'wareHouseList', //仓库货位列表
      wareHouse: 'wareHouse', //仓库货位
      companyID: 'companyID', //公司
      sysFaID: 'sysFaID', //父级ID
      cStorageCode: 'cStorageCode', //仓储编码
      cStorageName: 'cStorageName', //仓储名称
      cAddress: 'cAddress', //仓储地址
      iLength: 'iLength', //长
      iWidth: 'iWidth', //宽
      iHeight: 'iHeight', //高
      iMaxQty: 'iMaxQty', //最高储量
      iMinQty: 'iMinQty', //最低储量
      iLength2: 'iLength2', //剩余长
      iWidth2: 'iWidth2', //剩余宽
      iHeight2: 'iHeight2', //剩余高
      cMemo: 'cMemo', //备注
      iOrder: 'iOrder', //排序
      message1: 'message1', //请输入仓储编码
      message2: 'message2', //请输入仓储名称
      message3: 'message3' //请选择归属公司
    },
    customer: {
      customerList: 'customerList', //客户列表
      customer: 'customer', //客户
      compCode: 'compCode', //客户代码
      provinceCode: 'provinceCode', //省份编码
      fullName: 'fullName', //供应商全称
      simpName: 'simpName', //供应商简称
      taxAccount: 'taxAccount', //税号
      bankName: 'bankName', //开户银行
      bankUser: 'bankUser', //账户名
      regCode: 'regCode', //组织机构代码
      bankAccount: 'bankAccount', //银行账号
      sysCompType: 'sysCompType', //公司类别
      sysGrade: 'sysGrade', //信誉等级
      provinceName: 'provinceName', //省份名称
      cityCode: 'cityCode', //城市编码
      cityName: 'cityName', //城市名称
      areaCode: 'areaCode', //区县编码
      areaName: 'areaName', //区县名称
      townCode: 'townCode', //城镇编码
      townName: 'townName', //城镇名称
      sysBusAreaID: 'sysBusAreaID', //所属业务区域
      enterpriseNature: 'enterpriseNature', //所属行业
      firstTime: 'firstTime', //初次合作时间
      header: 'header', //法人代表
      address: 'address', //地址
      postCode: 'postCode', //邮政编码
      linkman: 'linkman', //联系人
      mail: 'mail', //电子邮件
      phone: 'phone', //电话
      fax: 'fax', //传真
      web: 'web', //网址
      status: 'status', //状态
      memo: 'memo', //备注
      baseInfo: 'baseInfo', //基本信息
      customercompany: '客户-公司', //客户-公司
      customeremployee: '客户-业务员', //客户-业务员
      customerInfo: 'customerInfo', //客户信息
      message1: '客户代码必填', //客户代码必填
      message2: '组织机构代码必填', //组织机构代码必填
      message3: '公司全称必填', //公司全称必填
      message4: '公司简称必填', //公司简称必填
      message5: '税号必填', //客户代码必填
      message6: '所属业务区域必选', //客户代码必填
      message7: '客户状态必选' //客户状态必选
    },
    customerService: {
      customerServiceList: 'customerServiceList', //客户业务员列表
      customerService: 'customerService', //客户业务员
      customerName: 'customerName', //客户
      companyName: 'companyName', //公司
      employeeName: 'employeeName' //人员
    },
    customerCompany: {
      customerCompanyList: 'customerCompanyList', //客户公司关系表列表
      companyCustomerList: 'companyCustomerList', //公司客户司关系表列表
      customerCompany: 'customerCompany', //客户公司关系表
      balanceMode: 'balanceMode', //结算方式
      limit: 'limit', //累计欠款额度
      balanceType: 'balanceType', //结算类别
      message1: '请输入累计欠款额度', //请输入累计欠款额度
      message2: '结算方式必填', //结算方式必填
      message3: '结算类别必填' //结算类别必填
    },
    customerAddr: {
      customerAddrList: 'customerAddrList', //客户送货地址列表
      customerAddr: 'customerAddr', //客户送货地址
      customer: 'customer', //客户
      company: 'company', //公司
      address: 'address', //地址
      range: 'range', //里程
      freight: 'freight', //运费
      deliveryMode: 'deliveryMode', //默认付货方式
      line: 'line', //发车线路
      linkman: 'linkman', //联系人
      mail: 'mail', //电子邮件
      phone: 'phone', //电话
      fax: 'fax', //传真
      conveyancer: 'conveyancer', //默认承运人
      conveyancerCode: 'conveyancerCode', //承运人编码
      wlCompany: 'wlCompany', //物流公司
      wlCode: '物流公司供应商类别', //物流公司供应商类别
      supplierCode: '供应商类别', //供应商类别
      memo: 'memo', //备注
      defaultAddress: 'defaultAddress', //是否默认地址defaultAddress: 'defaultAddress', //是否默认地址
      message1: '请选择公司', //请选择公司
      message2: '请选择客户', //请选择客户
      message3: '请填写地址', //请填写地址
      message4: '请选择送货承运人', //请选择送货承运人
      message5: '请选择物流公司' //请选择物流公司
    },
    stock: {
      stockList: 'stockList', //物料主数据列表
      stock: 'stock', //物料主数据
      code: 'code', //物料编码
      name: 'name', //物料名称
      gG: 'gG', //规格
      xH: 'xH', //型号
      stockType: 'stockType', //物料分类
      unit: 'unit', //主计量单位
      decimalLength: 'decimalLength', //主计量单位允许的小数位数
      memo: 'memo', //备注
      message1: 'message1', //请输入物料编码
      message2: 'message2', //请输入物料名称
      message3: 'message3', //请选择物料分类
      message4: 'message4', //请选择计量单位
      message5: 'message5', //主计量单位允许的小数位数在 0 到 4之间
      message6: 'message6' //物料编码或名称至少有一个不为空
    },
    stockCompany: {
      stockCompanyList: 'stockCompanyList', //物料公司关系列表
      stockCompany: 'stockCompany', //物料公司关系
      stockID: 'stockID', //物料ID
      companyID: 'company', //公司ID
      source: 'source', //材料来源
      defWHS: 'defWHS', //默认仓库
      unit2: 'unit2', //辅助计量单位
      rate21: 'rate21', //换算倍率（第二单位/第一单位）
      rate12: 'rate12', //换算倍率(第一单位/第二单位)
      decimalLength2: 'decimalLength2', //第二单位允许的小数位数
      set2: 'set2', //设置方式
      purchase: 'purchase', //可外购
      manufacture: 'manufacture', //可自制
      sale: 'sale', //可出售
      checkIn: 'checkIn', //入库需检验
      checkOut: 'checkOut', //出库需检验
      overPercent: 'overPercent', //送货容差率
      checkDays: 'checkDays', //检验周期
      readyHours: 'readyHours', //备品周期
      buyHours: 'buyHours', //采购周期
      minQty: 'minQty', //最低储量
      maxQty: 'maxQty', //最高储量
      useBatch: 'useBatch', //启用批次
      useSupplierBatch: 'useSupplierBatch', //启用供应商批次
      memo: 'memo', //备注
      message1: 'message1', //请选择公司
      message2: 'message2', //请选择材料来源
      message3: 'message3', //第二单位允许的小数位数在 0 到 4之间
      message4: 'message4', //请输入检验周期
      message5: 'message5', //请输入备品周期
      message6: 'message6', //请输入采购周期
      message7: 'message7', //请输入最低储量
      message8: 'message8', //请输入最高储量
      message9: 'message9', //请输入换算倍率
      message10: 'message10' //请输入送货容差率
    },
    customerSettlement: {
      customerSettlementList: 'customerSettlementList', //客户结算方式列表
      customerSettlement: 'customerSettlement', //客户结算方式
      code: 'code', //结算类别编码
      text: 'text', //结算类别
      description: 'description', //结算类别说明
      jSQJ: 'jSQJ', //结算期间
      jSQJEnd: 'jSQJEnd', //结算期间截止日
      kPQJ: 'kPQJ', //对账开票时间
      hKEnd: 'hKEnd', //回款最后时点
      month: 'month', //月
      day: 'day', //回款期
      message1: 'message1', //请输入结算类别编码
      message2: 'message2', //请输入结算类别
      message3: 'message3', //请输入结算类别说明
      message4: 'message4', //请输入结算期间
      message5: 'message5', //请输入结算期间截止日
      message6: 'message6', //请输入回款最后时点
      message7: 'message7', //请输入月
      message8: 'message8' //请输入回款期
    }
  },
  materialManage: {
    inventory: {
      inventoryList: 'inventoryList', //库存表列表
      inventory: 'inventory', //库存表
      stockCode: 'stockCode', //物料编码
      warehouse: 'warehouse', //仓库
      location: 'location', //货位
      batch: 'batch', //批次
      supplierBatch: 'supplierBatch', //供应商批次
      quantity: 'quantity', //数量
      price: 'price', //单价
      money: 'money', //金额
      quantity2: 'quantity2', //辅助单位数量
      companyID: 'companyID', //公司ID
      companyName: 'companyName', //公司名称
      stockName: 'stockName', //物料名称
      unitName: 'unitName', //单位
      unit2Name: 'unit2Name', //辅助单位
      free1: 'free1', //备注
      free2: 'free2', //备注
      free3: 'free3', //备注
      free4: 'free4', //备注
      free5: 'free5' //备注
    },
    inventoryTransaction: {
      PickingList: 'PickingList', //领料单
      CheckOut: 'CheckOut', //库房出库
      inventoryTransaction: 'inventoryTransaction', //库存交易单主表
      transcation: 'transcation', //交易事务
      type: 'type', //交易类型
      Code: 'Code', //单号
      originalOrder: 'originalOrder', //原始单号
      supplier: 'supplier', //供应商
      supplierAddress: 'supplierAddress', //供应商地址
      rKMode: 'rKMode', //入库方式
      invoiceNumber: 'invoiceNumber', //发票号码
      invoiceID: 'invoiceID', //发票Id
      stock: 'stock', //存货
      money: 'money', //总金额
      rate: 'rate', //税率
      agent: 'agent', //经办人/领用人
      arrivalDate: 'arrivalDate', //送达时间/领用日期
      checkListID: 'checkListID', //检验单ID
      rQDept: 'rQDept', //领用部门
      flowStateID: 'flowStateID', //审批流程ID
      memo: 'memo', //备注
      iStatus: 'iStatus', //单据状态
      companyID: 'companyID', //公司
      collectiontime: '领用日期', //领用日期
      recipients: '领用人', //领用人
      free1: 'free1', //备注1
      free2: 'free2', //备注2
      free3: 'free3', //备注3
      free4: 'free4', //备注4
      free5: 'free5' //备注5
    },
    inventoryTransactionDetails: {
      inventoryTransactionDetailsList: 'inventoryTransactionDetailsList', //库存交易单明细表列表
      inventoryTransactionDetails: 'inventoryTransactionDetails', //库存交易单明细表
      inventoryTransactionID: 'inventoryTransactionID', //物料交易事务主表ID
      rowNum: 'rowNum', //行号
      stockCode: 'stockCode', //物料编码
      stockName: 'stockName', //物料名称
      batch: 'batch', //批次
      supplierBatch: 'supplierBatch', //供应商批次
      uses: 'uses', //材料用途
      unit: 'unit', //单位
      quantity: 'quantity', //数量
      price: 'price', //单价
      money: 'money', //金额
      tax: 'tax', //税额
      moneyTax: 'moneyTax', //价税合计
      unit2: 'unit2', //辅助单位
      quantity2: 'quantity2', //辅助单位数量
      isCheck: 'isCheck', //是否需检验
      checkListID: 'checkListID', //检验单ID
      invoiceID: 'invoiceID', //发票ID
      qualifiedQty: 'qualifiedQty', //合格数量
      unQualifiedQty: 'unQualifiedQty', //不合格数量
      receivedQty: 'receivedQty', //实际数量
      receivedQty2: 'receivedQty2', //实际辅助单位数量
      receivedPrice: 'receivedPrice', //实际单价
      receivedMoney: 'receivedMoney', //实际金额
      receivedTime: 'receivedTime', //实际操作时间
      free1: 'free1', //备注1
      free2: 'free2', //备注2
      free3: 'free3', //备注3
      free4: 'free4', //备注4
      free5: 'free5', //备注5
      message1: '第一单位数量不能超过最大可用数量', //第一单位数量不能超过最大可用数量
      message2: '交易事务类型必填', //交易事务类型必填
      message3: '领用人必填', //领用人必填
      message4: '领用日期必填', //领用日期必填
      message5: '请输入第一单位数量', //请输入第一单位数量
      message6: '请输入第二单位数量', //请输入第一单位数量
      message7: '请输入明细', //请输入明细
      title: '重新保存', //重新保存
      reSave: '重新提交', //重新提交
      preview: '查看' //查看
    },
    inventoryTransactionDetailsWH: {
      inventoryTransactionDetailsWHList: 'inventoryTransactionDetailsWHList', //库存交易单明细表-仓库货位列表
      inventoryTransactionDetailsWH: 'inventoryTransactionDetailsWH', //库存交易单明细表-仓库货位
      inventoryTransactionDetailsID: 'inventoryTransactionDetailsID', //物料交易事务明细表ID
      receivedQty: 'receivedQty', //实际数量
      sourceWareHouseID: 'sourceWareHouseID', //源仓库
      sourceLocationID: 'sourceLocationID', //源货位
      destinationWareHouseID: 'destinationWareHouseID', //目标仓库
      destinationLocationID: 'destinationLocationID', //目标货位
      returnQuantity: 'returnQuantity', //退料数
      sourceID: 'sourceID', //原单ID
      status: 'status', //状态
      free1: 'free1', //备注1
      free2: 'free2', //备注2
      free3: 'free3', //备注3
      free4: 'free4', //备注4
      free5: 'free5' //备注5
    }
  },
  interface: {
    dingCache: {
      companyID: 'companyID', //公司编码
      msgID: 'msgID', //消息ID
      status: 'status', //状态
      dingCacheQuery: 'dingCacheQuery', //钉钉待处理任务查询列表
      companyName: 'companyName', //公司名称
      agentId: 'agentId', //agentId
      appKey: 'appKey', //微应用AppKey
      appSecret: 'appSecret', //微应用AppSecret
      phone: 'phone', //发起人
      templateID: 'templateID', //钉钉模板ID
      templateText: 'templateText', //模板内容
      statusName: 'statusName', //状态
      dingID: 'dingID', //钉钉审批实例ID
      dingStatusName: 'dingStatusName', //钉钉审批流最终状态
      dingOverDate: 'dingOverDate', //转发钉钉完成时间
      dingNum: 'dingOverDate', //转发钉钉连续发送次数
      dingfeedbackOverDate: 'dingfeedbackOverDate', //钉钉反馈完成时间
      dingfeedbackNum: 'dingfeedbackNum', //钉钉反馈连续发送次数
      mesOverDate: 'mesOverDate', //转发MES完成时间
      mesOverNum: 'mesOverNum', //转发MES连续发送次数
      typeName: 'typeName' //钉钉数据类型
    },
    dingLog: {
      companyID: 'companyID', //公司编码
      msgID: 'msgID', //消息ID
      Operate: 'Operate', //操作
      status: 'status', //状态
      dingLogQuery: 'dingLogQuery', //钉钉转发日志查询列表
      log: 'log', //接口内容日志
      errMsg: 'errMsg' //接口错误消息
    }
  },
  workflow: {
    flowmain: {
      FinishStep: 'FinishStep', //步骤号
      PerName: 'PerName', //人员
      Result: 'Result', //操作
      FinishedTime: 'FinishedTime', //时间
      Explain: 'Explain', //意见
      workflowsub: 'workflowsub' //审批流程
    }
  }
}
