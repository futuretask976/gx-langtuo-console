import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Flex, Input, Layout, Modal, Select, Space, Table, TreeSelect, Col, Row } from 'antd';
import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

import '../css/common.css';

import HeaderBar from '../components/HeaderBar'
import SiderMenu from '../components/SiderMenu'
import BreadcrumbBlock from "../components/BreadcrumbBlock"
import AdminListBlock from '../components/AdminListBlock'
import AdminNewModal from '../components/AdminNewModal'
import FooterBar from '../components/FooterBar'

const { Content } = Layout;
const { TextArea } = Input;

const AdminPage = () => {
    // 导航菜单 + 面包屑相关
    const openMenu = ['userSub'];
    const selectedMenu = ['6'];
    const breadcrumbPath = ['控制台', '用户', '管理员管理'];

    // 页面样式相关
    const layoutStyle = {
        height: 1000,
        overflow: 'hidden',
        width: 'calc(100% - 5px)',
        maxWidth: 'calc(100% - 5px)',
        border: '0px solid red',
    };

    // 新建对话框相关
    const [openNewModal, setOpenNewModal] = useState(false);
    const onOpenNewModal = () => {
        setOpenNewModal(true);
    };
    const onCloseNewModal = () => {
        setOpenNewModal(false);
        setLoginName4Edit('');
    }

    // 搜索相关
    var roleName4SearchTmp = '';
    const [roleName4Search, setRoleName4Search] = useState('');
    const onChangeRoleName4Search = (e) => {
        roleName4SearchTmp = e.target.value;
    }
    var loginName4SearchTmp = '';
    const [loginName4Search, setLoginName4Search] = useState('');
    const onChangeLoginName4Search = (e) => {
        loginName4SearchTmp = e.target.value;
    }
    const onClickSearch = () => {
        alert("roleName4SearchTmp=" + roleName4SearchTmp);
        alert("loginName4SearchTmp=" + loginName4SearchTmp);
        setRoleName4Search(roleName4SearchTmp);
        setLoginName4Search(loginName4SearchTmp);
    }

    // 表格操作相关
    const [loginName4Edit, setLoginName4Edit] = useState('');
    const onClickEdit = (selectedLoginName)=> {
        setLoginName4Edit(selectedLoginName);
        setOpenNewModal(true);
    }

    return (
        <>
            <Flex gap="middle" justify="center" wrap="wrap">
                <Layout style={layoutStyle}>
                    <HeaderBar />
                    <Layout>
                        <SiderMenu openMenu={openMenu} selectedMenu={selectedMenu} />
                        <Layout>
                            <Content style={{ margin: '0px 5px 0px 5px' }}>
                                <BreadcrumbBlock breadcrumbPath={breadcrumbPath} />
                                <Row style={{backgroundColor: '#fff'}}>&nbsp;</Row>
                                <Row style={{backgroundColor: '#fff'}}>
                                    <Col className="gutter-row" span={2}>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#fff', height: '100%'}}>
                                            <span>登录名称：</span>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', height: '100%'}}>
                                            <Input placeholder="登录名称" onChange={onChangeLoginName4Search}/>&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={2}>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#fff', height: '100%'}}>
                                            <span>角色名称：</span>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', height: '100%'}}>
                                            <Input placeholder="角色名称" onChange={onChangeRoleName4Search}/>&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={3}>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', height: '100%'}}>
                                            <Button type="primary" icon={<SearchOutlined />} onClick={onClickSearch}>开始搜索</Button>&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={3}>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', height: '100%'}}>
                                            <Button type="primary" icon={<FormOutlined />} onClick={onOpenNewModal}>新建管理员</Button>&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        &nbsp;
                                    </Col>
                                </Row>
                                <Row style={{backgroundColor: '#fff', borderRadius: 0, margin: '0px 0px'}}>&nbsp;</Row>
                                <div>&nbsp;</div>
                                <AdminListBlock loginName4Search={loginName4Search} roleName4Search={roleName4Search} onClickEdit={onClickEdit} />
                            </Content>
                        </Layout>
                    </Layout>
                    <FooterBar />
                </Layout>
            </Flex>

            {openNewModal && (
                <AdminNewModal onClose={onCloseNewModal} loginName4Edit={loginName4Edit} />
            )}
        </>
    )
};

export default AdminPage;
