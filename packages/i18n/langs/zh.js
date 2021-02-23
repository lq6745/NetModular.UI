// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
  unified: {
    id: 'id', //编号
    add: '添加', //添加
    delete: '删除', //删除
    export: '导出', //导出
    preview: '预览', //预览
    edit: '编辑', //编辑
    query: '查询', //查询
    reset: '重置', //重置
    addNew: '新增', //新增
    View: '查看', //查看
    operation: '操作', //操作
    Close: '关闭', //关闭
    Save: '保存', //保存
    Repeat: '手动转发', //手动转发
    SaveSuccess: '保存成功', //保存成功
    selectcolumn: '选择列', //选择列
    Advancedquery: '高级查询', //高级查询
    Details: '详情预览', //详情预览
    creator: '创建人', //创建人
    createdTime: '创建时间', //创建时间
    DepartmentStructure: '部门架构', //部门架构
    organizationStructure: '组织机构', //组织机构
    ChoiceCompany: '选择公司', //选择公司
    ChoiceArea: '选择区域', //选择区域
    ChoiceWlcompany: '选择物流公司', //选择物流公司
    choiceDriver: '选择司机', //选择司机
    ChoiceStock: '选择物料', //选择物料
    CheckAll :'全选' //全选
  },
  test: {
    defaultButton:'默认按钮',//默认按钮
  },
  master: {
    supplier: {
      companyId: '所属公司', //所属公司
      supplier: '供应商', //供应商
      supplierList: '供应商列表', //供应商列表
      cFullName: '供应商全称', //供应商全称
      cSimpName: '供应商简称', //供应商简称
      cCompCode: '供应商代码', //供应商代码
      cRegCode: '组织机构代码', //组织机构代码
      cTaxAccount: '税号', //税号
      cBankName: '开户银行', //开户银行
      cBankUser: '帐户名', //帐户名
      cBankAccount: '银行账号', //银行账号
      sysCompType: '供应商类别', //供应商类别
      sysGrade: '信誉等级', //信誉等级
      area: '所属行政区域', //所属行政区域
      cEnterpriseNature: '所属行业', //所属行业
      cFirstTime: '初次合作时间', //初次合作时间
      cHeader: '法人代表', //法人代表
      cAddress: '地址', //地址
      cPostCode: '邮政编码', //邮政编码
      cLinkman: '联系人', //联系人
      cMail: '电子邮件', //电子邮件
      cPhone: '电话', //电话
      cFax: '传真', //传真
      cWeb: '网址', //网址
      iStatus: '状态', //状态
      cMemo: '备注', //备注
      message1: '请输入供应商代码', //请输入供应商代码
      message2: '请输入组织机构代码', //请输入组织机构代码
      message3: '请输入供应商全称', //请输入供应商全称
      message4: '请输入供应商简称', //请输入供应商简称
      message5: '请输入税号', //请输入税号
      message6: '请选择供应商类别', //请选择供应商类别
      message7: '请选择信用等级', //请选择信用等级
      message8: '请选择初次合作时间', //请选择初次合作时间
      message9: '请选择状态' //请选择状态
    },
    company: {
      company: '公司', //公司
      companyList: '公司列表', //公司列表
      sysFaID: '父级ID', //父级ID
      cCompCode: '公司代码', //公司代码
      cRegCode: '组织机构代码', //组织机构代码
      cFullName: '公司全称', //公司全称
      cSimpName: '公司简称', //公司简称
      cTaxAccount: '税号', //税号
      cBankName: '开户银行', //开户银行
      cBankUser: '帐户名', //帐户名
      sysCompType: '公司行业类别', //公司行业类别
      area: '所属行政区域', //所属行政区域
      cHeader: '法人代表', //法人代表
      cAddress: '地址', //地址
      cPostCode: '邮政编码', //邮政编码
      cLinkman: '联系人', //联系人
      cMail: '电子邮件', //电子邮件
      cPhone: '电话', //电话
      cFax: '传真', //传真
      cWeb: '网址', //网址
      iStatus: '状态', //状态
      cMemo: '备注', //备注
      sort: '排序', //排序
      itype: '公司性质', //公司性质
      interfaceAddress1: '接口地址1', //接口地址1
      interfaceAddress2: '接口地址2', //接口地址2
      interfaceAddress3: '公司性质3', //接口地址3
      agentId: '钉钉微应用ID', //钉钉微应用ID
      appKey: '微应用AppKey', //微应用AppKey
      appSecret: '微应用AppSecret', //微应用AppSecret
      otherCompanyId: '第三方公司ID', //第三方公司ID
      companyFrame: '公司架构', //公司架构
      companyOrg: '公司机构', //公司机构
      message1: '请输入公司代码', //请输入公司代码
      message2: '请输入组织机构代码', //请输入组织机构代码
      message3: '请输入公司全称', //请输入公司全称
      message4: '请输入公司简称', //请输入公司简称
      message5: '请选择公司性质' //请选择公司性质
    },
    roleCompany: {
      roleList: '角色列表', //角色列表
      title: '角色公司关系' //标题显示内容
    },
    departmentCompany: {
      title: '部门公司关系' //标题显示内容
    },
    businessArea: {
      businessAreaList: '区域设置列表', //区域设置列表
      businessArea: '区域设置', //区域设置
      sysFaId: '父节点', //父节点
      cCode: '区域编码', //区域编码
      cName: '区域名称', //区域名称
      cMemo: '备注', //备注
      iOrder: '排序', //排序
      businessAreaFrame: '区域架构', //区域架构
      businessAreaOrg: '区域机构', //区域机构
      message1: '区域编码必填', //区域编码必填
      message2: '区域名称必填', //区域名称必填
      selectArea: '请选择区域' //请选择区域
    },
    businessAreaEmployee: {
      businessAreaEmployeeList: '区域人员关系表列表', //区域人员关系表列表
      businessAreaEmployee: '区域人员关系表', //区域人员关系表
      areaId: '区域Id', //区域Id
      employeeId: '人员编号', //人员编号
      businessAreaName: '区域名称', //区域名称
      employeeName: '人员名称', //人员名称
      companyName: '公司名称', // 公司名称
      deptName: '部门架构', //部门架构
      choiceEmployee: '选择人员', //选择人员
      tip: '已选择{0}位' //已选择{0}位
    },
    wareHouse: {
      wareHouseList: '仓库货位列表', //仓库货位列表
      wareHouse: '仓库货位', //仓库货位
      companyID: '公司', //公司
      sysFaID: '父级ID', //父级ID
      cStorageCode: '仓储编码', //仓储编码
      cStorageName: '仓储名称', //仓储名称
      cAddress: '仓储地址', //仓储地址
      iLength: '长', //长
      iWidth: '宽', //宽
      iHeight: '高', //高
      iMaxQty: '最高储量', //最高储量
      iMinQty: '最低储量', //最低储量
      iLength2: '剩余长', //剩余长
      iWidth2: '剩余宽', //剩余宽
      iHeight2: '剩余高', //剩余高
      cMemo: '备注', //备注
      iOrder: '排序', //排序
      message1: '请输入仓储编码', //请输入仓储编码
      message2: '请输入仓储名称', //请输入仓储名称
      message3: '请选择归属公司' //请选择归属公司
    },
    customer: {
      customerList: '客户列表', //客户列表
      customer: '客户', //客户
      compCode: '客户代码', //客户代码
      provinceCode: '省份编码', //省份编码
      fullName: '供应商全称', //供应商全称
      simpName: '供应商简称', //供应商简称
      taxAccount: '税号', //税号
      bankName: '开户银行', //开户银行
      bankUser: '账户名', //账户名
      regCode: '组织机构代码', //组织机构代码
      bankAccount: '银行账号', //银行账号
      sysCompType: '公司类别', //公司类别
      sysGrade: '信誉等级', //信誉等级
      provinceName: '省份名称', //省份名称
      cityCode: '城市编码', //城市编码
      cityName: '城市名称', //城市名称
      areaCode: '区县编码', //区县编码
      areaName: '区县名称', //区县名称
      townCode: '城镇编码', //城镇编码
      townName: '城镇名称', //城镇名称
      sysBusAreaID: '所属业务区域', //所属业务区域
      enterpriseNature: '所属行业', //所属行业
      firstTime: '初次合作时间', //初次合作时间
      header: '法人代表', //法人代表
      address: '地址', //地址
      postCode: '邮政编码', //邮政编码
      linkman: '联系人', //联系人
      mail: '电子邮件', //电子邮件
      phone: '电话', //电话
      fax: '传真', //传真
      web: '网址', //网址
      status: '状态', //状态
      memo: '备注', //备注
      baseInfo: '基本信息', //基本信息
      customercompany: '客户-公司', //客户-公司
      customeremployee: '客户-业务员', //客户-业务员
      customerInfo: '客户信息', //客户信息
      message1: '客户代码必填', //客户代码必填
      message2: '组织机构代码必填', //组织机构代码必填
      message3: '公司全称必填', //公司全称必填
      message4: '公司简称必填', //公司简称必填
      message5: '税号必填', //客户代码必填
      message6: '所属业务区域必选', //客户代码必填
      message7: '客户状态必选' //状态必选
    },
    customerService: {
      customerServiceList: '客户业务员列表', //客户业务员列表
      customerService: '客户业务员', //客户业务员
      customerName: '客户', //客户
      companyName: '公司', //公司
      employeeName: '人员' //人员
    },
    customerCompany: {
      customerCompanyList: '客户公司关系表列表', //客户公司关系表列表
      companyCustomerList: '公司客户关系列表', //公司客户司关系表列表
      customerCompany: '客户公司关系表', //客户公司关系表
      balanceMode: '结算方式', //结算方式
      limit: '累计欠款额度', //累计欠款额度
      balanceType: '结算类别', //结算类别
      message1: '请输入累计欠款额度', //请输入累计欠款额度
      message2: '结算方式必填', //结算方式必填
      message3: '结算类别必填' //结算类别必填
    },
    customerAddr: {
      customerAddrList: '客户送货地址列表', //客户送货地址列表
      customerAddr: '客户送货地址', //客户送货地址
      customer: '客户', //客户
      company: '公司', //公司
      address: '地址', //地址
      range: '里程', //里程
      freight: '运费', //运费
      deliveryMode: '默认付货方式', //默认付货方式
      line: '发车线路', //发车线路
      linkman: '联系人', //联系人
      mail: '电子邮件', //电子邮件
      phone: '电话', //电话
      fax: '传真', //传真
      conveyancer: '承运人', //默认承运人
      conveyancerCode: '承运人角色', //承运人编码
      wlCompany: '物流公司', //物流公司
      wlCode: '物流公司供应商类别', //物流公司供应商类别
      supplierCode: '供应商类别', //供应商类别
      memo: '备注', //备注
      defaultAddress: '是否默认地址', //是否默认地址
      message1: '请选择公司', //请选择公司
      message2: '请选择客户', //请选择客户
      message3: '请填写地址', //请填写地址
      message4: '请选择送货承运人', //请选择送货承运人
      message5: '请选择物流公司' //请选择物流公司
    },
    stock: {
      stockList: '物料主数据列表', //物料主数据列表
      stock: '物料主数据', //物料主数据
      code: '物料编码', //物料编码
      name: '物料名称', //物料名称
      gG: '规格', //规格
      xH: '型号', //型号
      stockType: '物料分类', //物料分类
      unit: '主计量单位', //主计量单位
      decimalLength: '小数位数', //主计量单位允许的小数位数
      memo: '备注', //备注
      message1: '请输入物料编码', //请输入物料编码
      message2: '请输入物料名称', //请输入物料名称
      message3: '请选择物料分类', //请选择物料分类
      message4: '请选择计量单位', //请选择计量单位
      message5: '主计量单位允许的小数位数在 0 到 4之间', //主计量单位允许的小数位数在 0 到 4之间
      message6: '物料编码或名称至少有一个不为空' //物料编码或名称至少有一个不为空
    },
    stockCompany: {
      stockCompanyList: '物料公司关系列表', //物料公司关系列表
      stockCompany: '物料公司关系', //物料公司关系
      stockID: '物料ID', //物料ID
      companyID: '公司', //公司ID
      source: '材料来源', //材料来源
      defWHS: '默认仓库', //默认仓库
      unit2: '辅助计量单位', //辅助计量单位
      rate21: '换算倍率（第二单位/第一单位）', //换算倍率（第二单位/第一单位）
      rate12: '换算倍率(第一单位/第二单位)', //换算倍率(第一单位/第二单位)
      decimalLength2: '小数位数', //第二单位允许的小数位数
      set2: '设置方式', //设置方式
      purchase: '可外购', //可外购
      manufacture: '可自制', //可自制
      sale: '可出售', //可出售
      checkIn: '入库需检验', //入库需检验
      checkOut: '出库需检验', //出库需检验
      overPercent: '送货容差率', //送货容差率
      checkDays: '检验周期', //检验周期
      readyHours: '备品周期', //备品周期
      buyHours: '采购周期', //采购周期
      minQty: '最低储量', //最低储量
      maxQty: '最高储量', //最高储量
      useBatch: '启用批次', //启用批次
      useSupplierBatch: '启用供应商批次', //启用供应商批次
      memo: '备注', //备注
      message1: '请选择公司', //请选择公司
      message2: '请选择材料来源', //请选择材料来源
      message3: '第二单位允许的小数位数在 0 到 4之间', //第二单位允许的小数位数在 0 到 4之间
      message4: '请输入检验周期', //请输入检验周期
      message5: '请输入备品周期', //请输入备品周期
      message6: '请输入采购周期', //请输入采购周期
      message7: '请输入最低储量', //请输入最低储量
      message8: '请输入最高储量', //请输入最高储量
      message9: '请输入换算倍率', //请输入换算倍率
      message10: '请输入送货容差率' //请输入送货容差率
    },
    customerSettlement: {
      customerSettlementList: '客户结算方式列表', //客户结算方式列表
      customerSettlement: '客户结算方式', //客户结算方式
      code: '结算类别编码', //结算类别编码
      text: '结算类别', //结算类别
      description: '结算类别说明', //结算类别说明
      jSQJ: '结算期间', //结算期间
      jSQJEnd: '结算期间截止日', //结算期间截止日
      kPQJ: '对账开票时间', //对账开票时间
      hKEnd: '回款最后时点', //回款最后时点
      month: '月', //月
      day: '回款期', //回款期
      message1: '请输入结算类别编码', //请输入结算类别编码
      message2: '请输入结算类别', //请输入结算类别
      message3: '请输入结算类别说明', //请输入结算类别说明
      message4: '请输入结算期间', //请输入结算期间
      message5: '请输入结算期间截止日', //请输入结算期间截止日
      message6: '请输入回款最后时点', //请输入回款最后时点
      message7: '请输入月', //请输入月
      message8: '请输入回款期' //请输入回款期
    }
  },
  materialManage: {
    inventory: {
      inventoryList: '库存表列表', //库存表列表
      inventory: '库存表', //库存表
      stockCode: '物料编码', //物料编码
      warehouse: '仓库', //仓库
      location: '货位', //货位
      batch: '批次', //批次
      supplierBatch: '供应商批次', //供应商批次
      quantity: '数量', //数量
      price: '单价', //单价
      money: '金额', //金额
      quantity2: '辅助单位数量', //辅助单位数量
      companyID: '公司ID', //公司ID
      companyName: '公司名称', //公司名称
      stockName: '物料名称', //物料名称
      unitName: '单位', //单位
      unit2Name: '辅助单位', //辅助单位
      free1: '备注', //备注
      free2: '备注', //备注
      free3: '备注', //备注
      free4: '备注', //备注
      free5: '备注' //备注
    },
    inventoryTransaction: {
      PickingList: '领料申请', //领料申请
      CheckOut: '库房出库', //库房出库
      inventoryTransaction: '领料申请', //库存交易单主表
      transcation: '交易事务', //交易事务
      type: '交易类型', //交易类型
      Code: '单号', //单号
      originalOrder: '原始单号', //原始单号
      supplier: '供应商', //供应商
      supplierAddress: '供应商地址', //供应商地址
      rKMode: '入库方式', //入库方式
      invoiceNumber: '发票号码', //发票号码
      invoiceID: '发票Id', //发票Id
      stock: '物料', //存货
      money: '总金额', //总金额
      rate: '税率', //税率
      agent: '领用人', //经办人/领用人
      arrivalDate: '领用日期', //送达时间/领用日期
      checkListID: '检验单ID', //检验单ID
      rQDept: '领用部门', //领用部门
      flowStateID: '审批流程ID', //审批流程ID
      memo: '备注', //备注
      iStatus: '单据状态', //单据状态
      companyID: '公司', //公司
      collectiontime: '领用日期', //领用日期
      recipients: '领用人', //领用人
      free1: '备注1', //备注1
      free2: '备注2', //备注2
      free3: '备注3', //备注3
      free4: '备注4', //备注4
      free5: '备注5' //备注5
    },
    inventoryTransactionDetails: {
      inventoryTransactionDetailsList: '库存交易单明细表列表', //库存交易单明细表列表
      inventoryTransactionDetails: '库存交易单明细表', //库存交易单明细表
      inventoryTransactionID: '物料交易事务主表ID', //物料交易事务主表ID
      rowNum: '行号', //行号
      stockCode: '物料编码', //物料编码
      stockName: '物料名称', //物料名称
      batch: '批次', //批次
      supplierBatch: '供应商批次', //供应商批次
      uses: '材料用途', //材料用途
      unit: '单位', //单位
      quantity: '数量', //数量
      price: '单价', //单价
      money: '金额', //金额
      tax: '税额', //税额
      moneyTax: '价税合计', //价税合计
      unit2: '辅助单位', //辅助单位
      quantity2: '辅助单位数量', //辅助单位数量
      isCheck: '是否需检验', //是否需检验
      checkListID: '检验单ID', //检验单ID
      invoiceID: '发票ID', //发票ID
      qualifiedQty: '合格数量', //合格数量
      unQualifiedQty: '不合格数量', //不合格数量
      receivedQty: '实际数量', //实际数量
      receivedQty2: '实际辅助单位数量', //实际辅助单位数量
      receivedPrice: '实际单价', //实际单价
      receivedMoney: '实际金额', //实际金额
      receivedTime: '实际操作时间', //实际操作时间
      free1: '备注1', //备注1
      free2: '备注2', //备注2
      free3: '备注3', //备注3
      free4: '备注4', //备注4
      free5: '备注5', //备注5
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
      inventoryTransactionDetailsWHList: '库存交易单明细表-仓库货位列表', //库存交易单明细表-仓库货位列表
      inventoryTransactionDetailsWH: '库存交易单明细表-仓库货位', //库存交易单明细表-仓库货位
      inventoryTransactionDetailsID: '物料交易事务明细表ID', //物料交易事务明细表ID
      receivedQty: '实际数量', //实际数量
      sourceWareHouseID: '源仓库', //源仓库
      sourceLocationID: '源货位', //源货位
      destinationWareHouseID: '目标仓库', //目标仓库
      destinationLocationID: '目标货位', //目标货位
      returnQuantity: '退料数', //退料数
      sourceID: '原单ID', //原单ID
      status: '是否处理', //状态
      free1: '备注1', //备注1
      free2: '备注2', //备注2
      free3: '备注3', //备注3
      free4: '备注4', //备注4
      free5: '备注5' //备注5
    }
  },
  interface: {
    dingCache: {
      companyID: '公司编码', //公司编码
      msgID: '消息ID', //消息ID
      status: '状态', //状态
      dingCacheQuery: '钉钉待处理任务查询列表', //钉钉待处理任务查询列表
      companyName: '公司名称', //公司名称
      agentId: '微应用agentId', //agentId
      appKey: '微应用AppKey', //微应用AppKey
      appSecret: '微应用AppSecret', //微应用AppSecret
      phone: '发起人', //发起人
      templateID: '钉钉模板ID', //钉钉模板ID
      templateText: '模板内容', //模板内容
      statusName: '状态', //状态
      dingID: '钉钉审批实例ID', //钉钉审批实例ID
      dingStatusName: '钉钉审批流最终状态', //钉钉审批流最终状态
      dingOverDate: '转发钉钉完成时间', //转发钉钉完成时间
      dingNum: '转发钉钉连续发送次数', //转发钉钉连续发送次数
      dingfeedbackOverDate: '钉钉反馈完成时间', //钉钉反馈完成时间
      dingfeedbackNum: '钉钉反馈连续发送次数', //钉钉反馈连续发送次数
      mesOverDate: '转发MES完成时间', //转发MES完成时间
      mesOverNum: '转发MES连续发送次数', //转发MES连续发送次数
      typeName: '钉钉数据类型' //钉钉数据类型
    },
    dingLog: {
      companyID: '公司编码', //公司编码
      msgID: '消息ID', //消息ID
      Operate: '操作', //操作
      status: '状态', //状态
      dingLogQuery: '钉钉转发日志查询列表', //钉钉转发日志查询列表
      log: '接口内容日志', //接口内容日志
      errMsg: '接口错误消息' //接口错误消息
    }
  },
  workflow: {
    flowmain: {
      FinishStep: '步骤号', //步骤号
      PerName: '人员', //人员
      Result: '操作', //操作
      FinishedTime: '时间', //时间
      Explain: '意见', //意见
      workflowsub: '审批流程' //审批流程
    }
  }
}
