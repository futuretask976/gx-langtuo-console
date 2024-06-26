import React, { useEffect, useState } from 'react';
import { Button, Flex, Input, Layout, Col, Row } from 'antd';
import { FormOutlined, SearchOutlined } from '@ant-design/icons';

import '../css/common.css';

import HeaderBar from '../components/HeaderBar'
import SiderMenu from '../components/SiderMenu'
import BreadcrumbBlock from "../components/BreadcrumbBlock"
import MachineModelListBlock from '../components/MachineModelListBlock'
import MachineModelNewModal from '../components/MachineModelNewModal'
import FooterBar from '../components/FooterBar'

const { Content } = Layout;

const MachineModelPage = () => {
    // 导航菜单 + 面包屑相关
    const openMenu = ['machineMetadataSub'];
    const selectedMenu = ['2'];
    const breadcrumbPath = ['控制台', '设备元数据', '设备型号管理'];

    // 页面样式相关
    const layoutStyle = {
        height: 880,
        overflow: 'hidden',
        width: 'calc(100% - 5px)',
        maxWidth: 'calc(100% - 5px)',
        border: '0px solid red',
    };

    // 新建对话框相关
    const [openNewModal, setOpenNewModal] = useState(false);
    const onCreateNewModelModal = () => {
        setOpenNewModal(true);
    };
    const onCloseNewModelModal = () => {
        setOpenNewModal(false);
        setModelCode4Edit('');
    }

    // 搜索相关
    var modelCode4SearchTmp = '';
    const [modelCode4Search, setModelCode4Search] = useState('');
    const onChangeModelCode4Search = (e) => {
        modelCode4SearchTmp = e.target.value;
    }
    const onClickSearch = () => {
        setModelCode4Search(modelCode4SearchTmp);
    }

    // 表格操作相关
    const [modelCode4Edit, setModelCode4Edit] = useState('');
    const onClickEdit = (selectedModelCode)=> {
        setModelCode4Edit(selectedModelCode);
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
                                        <div className="flex-row-cont" style={{justifyContent: 'flex-end', height: '100%'}}>
                                            <span>型号编码：</span>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="flex-row-cont">
                                            <Input placeholder="型号编码" onChange={onChangeModelCode4Search} />&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={3}>
                                        <div className="flex-row-cont">
                                            <Button type="primary" icon={<SearchOutlined />} onClick={onClickSearch}>开始搜索</Button>&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={3}>
                                        <div className="flex-row-cont">
                                            <Button type="primary" icon={<FormOutlined />} onClick={onCreateNewModelModal}>新建型号</Button>&nbsp;&nbsp;
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={12}>
                                        &nbsp;
                                    </Col>
                                </Row>
                                <Row style={{backgroundColor: '#fff', borderRadius: 0, margin: '0px 0px'}}>&nbsp;</Row>
                                <div>&nbsp;</div>
                                <MachineModelListBlock modelCode4Search={modelCode4Search} onClickEdit={onClickEdit} />
                            </Content>
                        </Layout>
                    </Layout>
                    <FooterBar />
                </Layout>
            </Flex>

            {openNewModal && (
                <MachineModelNewModal onClose={onCloseNewModelModal} modelCode4Edit={modelCode4Edit} />
            )}
        </>
    )
};

export default MachineModelPage;
