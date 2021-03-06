import Immutable from 'immutable';

export const IcoMachineAddress = "0xbebd7b2a9edb51b28854236041daec1f5e0f2398";

export const RegistryAddress = '0xf4d139fE4f73725dcc6eb364e4593a00F07DC0a9';

export const CreateTokenFunc = Immutable.fromJS({
    name:'createToken',
    inputs:[{ name:'initialSupply', type:'uint256' },
            { name:'tokenName', type:'string' },
            { name:'decimals', type:'uint8' },
            { name:'symbol', type:'string' }]
    });

export const CreateSaleFunc = Immutable.fromJS({
    name:'createSale',
    inputs:[{ name:'fundingGoal', type:'uint' },
            { name:'costOfEachToken', type:'uint' },
            { name:'premine', type:'uint256' },
            { name:'index', type: 'uint256' }]
    });

export const TokensFunc = Immutable.fromJS({
    name:'tokens',
    inputs:[{ name: 'address', type: 'address' },
            { name: 'index', type: 'uint256' }],
    outputs:[{name:"tokenAddress","type":"address"},
            {name:"saleAddress","type":"address"},
            {name:"initialSupply","type":"uint256"},
            {name:"tokenName","type":"string"},
            {name:"decimals","type":"uint8"},
            {name:"symbol","type":"string"}]
});

export const TokenIndex = Immutable.fromJS({
    name:'tokenIndex',
    inputs:[{ name: '', type: 'address' }],
    outputs:[{"name":"","type":"uint256"}]
});

export const BalanceOfFunc = Immutable.fromJS({
    name:'balanceOf',
    inputs:[{name:'_owner',type:'address'}],
    outputs:[{name:'balance',type:'uint256'}]
});

export const TransferTokensFunc = Immutable.fromJS({
    name:'transfer',
    inputs:[{ name:'_to', type:'address' },
            { name:'_value', type:'uint256' }]
    });

export const BuyTokensFunc = Immutable.fromJS({
    name:'buyTokens',
    inputs:[{ name: 'buyer', type: 'address' }]
    });

export const CrowdSaleFuncs = [
    Immutable.fromJS({
        name: "amountRaised",
        inputs:[],
        outputs:[{ name: '', type: 'uint'}]
    }),
    Immutable.fromJS({
        name: "beneficiary",
        inputs:[],
        outputs:[{ name: '', type: 'address'}]
    }),
    Immutable.fromJS({
        name: "fundingGoal",
        inputs:[],
        outputs:[{ name: '', type: 'uint'}]
    }),
    Immutable.fromJS({
        name: "price",
        inputs:[],
        outputs:[{ name: '', type: 'uint'}]
    }),
    Immutable.fromJS({
        name: "tokenReward",
        inputs:[],
        outputs:[{ name: '', type: 'address'}]
    })
]

export const ERC223Funcs = [
    Immutable.fromJS({
        name: "name",
        inputs:[],
        outputs:[{ name: '', type: 'string'}]
    }),
    Immutable.fromJS({
        name: "symbol",
        inputs:[],
        outputs:[{ name: '', type: 'string'}]
    }),
    Immutable.fromJS({
        name: "decimals",
        inputs:[],
        outputs:[{ name: '', type: 'uint8'}]
    }),
    Immutable.fromJS({
        name: "totalSupply",
        inputs:[],
        outputs:[{ name: '', type: 'uint256'}]
    }),
    Immutable.fromJS({
        name: "standard",
        inputs:[],
        outputs:[{ name: '', type: 'string'}]
    }),
]


export const RegisterFunc =  Immutable.fromJS({
  name: 'register',
  inputs:[{name:"_tAddr", type : "address"},
          {name:"_tSale", type: "address"},
          {name:"_tName", type: "string"},
          {name:"_tSymbol", type:"string"},
          {name:"_tDecimal",type:"uint"},
          {name:"_tType",type:"string"},
          {name:"_tIcon",type:"string"},
          {name:"_tURL",type:"string"},
          {name:"_tBlerb",type:"string"}],
  outputs:[]
});

export const regCount =  Immutable.fromJS({
        name: "Count",
        inputs:[],
        outputs:[{ name: '', type: 'uint'}]
      });

export const regData =  Immutable.fromJS({
        name: "getArray",
        inputs:[{name:"_index", type:"uint"}],
        outputs:[{ name: 'tAddr', type: 'address'},
                { name: 'tSale', type: 'address'},
                { name: 'tName', type: 'string'},
                { name: 'tSymbol', type: 'string'},
                { name: 'tDecimal', type: 'uint'},
                { name: 'tType', type: 'string'},
                { name: 'tIcon', type: 'string'},
                {name:'tURL',type:'string'},
                {name:'tBlerb',type:'string'}]
    });
export const regQuick =  Immutable.fromJS({
        name: "getQuick",
        inputs:[{name:"_index", type:"uint"}],
        outputs:[{ name: 'tAddr', type: 'address'},
                { name: 'tName', type: 'string'},
                { name: 'tSymbol', type: 'string'},
                { name: 'tIcon', type: 'string'}]
        });
