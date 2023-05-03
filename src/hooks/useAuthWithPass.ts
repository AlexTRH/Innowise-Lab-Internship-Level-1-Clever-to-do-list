import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IsLoadingEnum } from '../store/isLoading/isLoadingSlice';
import { AuthError, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
