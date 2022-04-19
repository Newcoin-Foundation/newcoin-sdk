
export type NCKeyPair = {
  pub_key: string;
  prv_key: string;
};

export type NCNameType = {
  name: string,
  type: string
};

export type NCCreateUser = {
    newUser: string,
    newacc_pub_active_key: string,
    newacc_pub_owner_key: string, 
    payer: string,
    payer_prv_key: string
    ram_amt?: number,
    cpu_amount?: string,
    net_amount?: string,
    xfer?: boolean // stake or transfer CPU/NET to the account
  };

  export type NCCreateCollection = {
    user: string,
    user_prv_active_key: string, 
    collection_name?: string,
    schema_name?: string,
    schema_fields?: NCNameType[], 
    template_name?: string,
    template_fields?: NCNameType[],
    mkt_fee?: number,
    allow_notify?: boolean, 
    xferable?: boolean,
    burnable?: boolean,
    max_supply?: number
  };
  
  export type NCCreatePermission = {
    author: string,
    perm_name: string,
    perm_pub_key: string,
    author_prv_active_key: string
  };

  export type NCLinkPerm = {
    author: string,               // the owner of the permission
    perm_to_link: string,
    action_owner: string,
    action_to_link: string, 
    author_prv_active_key: string
  };

  export type NCCreatePool = {
    owner: string;
    owner_prv_active_key: string;
  };
  
  export type NCStakeMainDao = {
    amt: string;
    payer: string;
    payer_prv_key: string;
  };

  export type NCStakePool = {
    owner: string;
    amt: string;
    payer: string;
    payer_prv_key: string;
  };
  
  export type NCUnstakePool = {
    amt: string; 
    payer: string;
    payer_prv_key: string;
  };
  
  export type NCAddToWhiteList = {
    pool_id: number,
    owner: string,
    owner_prv_key: string;
  }

  export type NCRemoveFromWhiteList = {
    pool_id: number,
    owner: string,
    owner_prv_key: string;
  }

  export type NCTxNcoBal = {
    to: string;
    amt: string;
    payer: string;
    memo: string;
    payer_pub_key: string;
    payer_prv_key: string;
  };

  export type NCPoolInfo = {
    id: string;
    code: string;
    owner: string;
    description: string;
    total: {
      quantity: string;
      contract: string;
    }
    creation_date: string;
    last_update_date: string;
  
  };
  
  export type NCPoolsInfo = {
    rows: NCPoolInfo[];
    more: boolean;
    next_key: string;
  }
  
  export type NCKeyValPair = {
    key: string,
    value: string[];
  };
  
  export type NCMintAsset = {
    creator: string,
    col_name?: string,
    sch_name?: string,
    tmpl_id?: number,
    immutable_data: NCKeyValPair[],
    mutable_data: NCKeyValPair[],
    payer: string,
    payer_prv_key: string
  };
  
  export type NCGetAccInfo = {
    owner: string,
    contract?: string     // pools.nco one possible value
  };
  
  export type NCGetPoolInfo = {
    owner?: string
    code?: string;
  };

  export type NCReturnTxs = {
    TxID_createAcc?: string;
    TxID_createCol?: string;
    TxID_createSch?: string;
    TxID_createTpl?: string;

    TxID_createPerm?: string;
    TxID_linkPerm?: string;
    
    TxID_createPool?: string;
    TxID_stakePool?: string; pool_code?: string; pool_id?: string;
    TxID_unstakePool?: string;
    
    TxID_withdrawFromPool?: string;
    TxID_addToWhiteList?: string;
    TxID_removeFromWhiteList?: string;
    TxID_stakeMainDAO?: string;
    TxID_unstakeMainDAO?: string;
    
    TxID_mintAsset?: string;
    TxID_txNcoBalance?: string;
  };
  
  export type NCReturnInfo = {
    acc_balances?: string[]
  };
  
  export const default_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
    { name: 'external_url', type: 'string' },
    { name: 'content_type', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'license', type: 'string' }
  ];

  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
  export const ERC721_schema = [
    { name: 'name', type: "string" },
    { name: 'description', type: "string" },
    { name: 'image', type: 'string' },
  ];

  // https://docs.opensea.io/docs/metadata-standards
  // export const OpenSea_schema = [
  //]